const sendEmail = require("../utils/sendEmail");

const testEmail = async (req, res) => {
    console.log("Email test")
  try {
    await sendEmail(
      req.body.email,
      "Hotel Booking Test",
      `       <h2>Email Working Successfully</h2>       <p>Your Hotel Management System email service is working.</p>
      `,
    );

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  testEmail,
};
