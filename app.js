const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger")
require("dotenv").config();

const app = express();

connectDB();
app.use(bodyParser.json());
app.use(logger)
app.use("/api/users", userRoutes);
app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
