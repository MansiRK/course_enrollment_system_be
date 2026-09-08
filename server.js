const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoute");

connectDB();

const app = express();

app.use("/api/auth", authRoutes);

app.use(express.json());
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
