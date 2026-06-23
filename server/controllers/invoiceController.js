const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const Booking = require("../models/Booking");

const generateInvoice = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId)
      .populate("guest")
      .populate("room");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    const invoiceName = `invoice-${booking._id}.pdf`;

    const invoicePath = path.join(__dirname, "../invoices", invoiceName);

    const doc = new PDFDocument();

    const stream = fs.createWriteStream(invoicePath);

    doc.pipe(stream);

    // Header
    doc.fontSize(22).text("HOTEL MANAGEMENT SYSTEM", {
      align: "center",
    });

    doc.moveDown();

    doc.fontSize(18).text("INVOICE", {
      align: "center",
    });

    doc.moveDown(2);

    doc.fontSize(12).text(`Invoice ID: ${booking._id}`);

    doc.text(`Guest Name: ${booking.guest.name}`);

    doc.text(`Guest Email: ${booking.guest.email}`);

    doc.text(`Room Number: ${booking.room.roomNumber}`);

    doc.text(`Check In: ${new Date(booking.checkInDate).toDateString()}`);

    doc.text(`Check Out: ${new Date(booking.checkOutDate).toDateString()}`);

    doc.moveDown();

    doc.text(`Payment Method: ${booking.paymentMethod}`);

    doc.text(`Payment Status: ${booking.paymentStatus}`);

    doc.moveDown();

    doc.fontSize(16).text(`Total Amount: ₹ ${booking.totalAmount}`);

    doc.moveDown(2);

    doc.text("Thank you for staying with us.", {
      align: "center",
    });

    doc.end();

    stream.on("finish", () => {
      res.download(invoicePath, (err) => {
        if (err) {
          console.error("Download Error:", err);
          return;
        }

        fs.unlink(invoicePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("File Delete Error:", unlinkErr);
          } else {
            console.log(`Invoice deleted: ${invoiceName}`);
          }
        });
      });
    });

    stream.on("error", (err) => {
      console.error("Stream Error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to generate invoice",
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateInvoice,
};
