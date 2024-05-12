//constants
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const orderRoutes = require("./api/routes/orders");
const customerRoutes = require("./api/routes/customers");

//provides more information on console
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //will extract json data and make it readable

//CORS error handling
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  //checks options for request
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Routes to handle requests
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

//setting error handling middleware
app.use((req, res, next) => {
  const error = new Error("NOT FOUND");
  error.status = 404;
  next(error);
});

//handles all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
