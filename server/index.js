const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

dotenv.config();
//middleware
app.use(express.json());
app.use(cors());  


// routes


// mongoose
connectDB();

app.get("/", (req, res) => {
  res.send("Hello Guddu");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
}); 
