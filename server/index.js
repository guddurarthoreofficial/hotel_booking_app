const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const errorHandler = require("./middleware/errorMiddleware");



dotenv.config();
//middleware
app.use(express.json());
app.use(cors());  
app.use(errorHandler);


// routes
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);


// mongoose
connectDB();

app.get("/", (req, res) => {
  res.send("Hello Guddu");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
}); 
