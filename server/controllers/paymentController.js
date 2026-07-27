const razorpay = require("../config/razorpay");
const Booking = require("../models/Booking");
const User = require("../models/User");
const crypto = require("crypto");

const sendEmail = require("../utils/sendEmail");
const logActivity = require("../utils/logActivity");

const createPaymentOrder = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Prevent payment for cancelled booking
    if (booking.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Cancelled booking cannot be paid.",
      });
    }

    // Prevent duplicate payment
    if (booking.paymentStatus === "paid") {
      return res.status(400).json({
        success: false,
        message: "Payment already completed.",
      });
    }

    const options = {
      amount: booking.totalAmount * 100,
      currency: "INR",
      receipt: `booking_${booking._id}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId,
    } = req.body;

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.paymentStatus === "paid") {
      return res.status(400).json({
        success: false,
        message: "Payment already verified.",
      });
    }

    // Update booking
    booking.paymentStatus = "paid";
    booking.status = "confirmed";
    booking.transactionId = razorpay_payment_id;

    await booking.save();

    // Activity Log
    await logActivity({
      action: "Payment",
      description: `Payment received ₹${booking.totalAmount}`,
      user: booking.guest,
      icon: "payment",
    });

    // Send Email
    const user = await User.findById(booking.guest);

    if (user) {
      await sendEmail(
        user.email,
        "Payment Successful",
        `
          <h2>Payment Successful 🎉</h2>

          <p>Your payment has been received successfully.</p>

          <hr/>

          <p><strong>Booking ID:</strong> ${booking._id}</p>

          <p><strong>Transaction ID:</strong> ${razorpay_payment_id}</p>

          <p><strong>Amount:</strong> ₹${booking.totalAmount}</p>

          <p><strong>Status:</strong> Confirmed</p>

          <br/>

          <p>Thank you for choosing <b>Juhi Petals Hotel</b>.</p>
        `
      );
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPaymentOrder,
  verifyPayment,
};