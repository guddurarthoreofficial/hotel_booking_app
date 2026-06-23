const express = require("express");

const {
testEmail,
} = require("../controllers/emailController");

const router = express.Router();

router.post("/test", testEmail);

module.exports = router;
