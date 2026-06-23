const razorpay = require("../config/razorpay");
const Booking = require("../models/Booking");
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");


const createPaymentOrder = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    const options = {
      amount: booking.totalAmount * 100, // paise
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

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    const booking = await Booking.findById(bookingId);

    booking.paymentStatus = "paid";
    booking.transactionId = razorpay_payment_id;

    await booking.save();

    const user = await User.findById(booking.guest);

    await sendEmail(
      user.email,
      "Payment Successful",
      `
    <h2>Payment Successful</h2>

    <p>Your payment has been received successfully.</p>

    <p><strong>Booking ID:</strong> ${booking._id}</p>

    <p><strong>Transaction ID:</strong> ${razorpay_payment_id}</p>

    <p><strong>Amount:</strong> ₹${booking.totalAmount}</p>
  `,
    );

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
