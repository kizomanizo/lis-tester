var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const mongoUrl = process.env.DATABASE_URL;
const ordersRouter = require("./routes/orders");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/v1/orders", ordersRouter);

// MongoDB Config
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 50,
  wtimeoutMS: 2500,
};

mongoose.connect(mongoUrl, options);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("**** MongoDB connected successfully ****"));

module.exports = app;
