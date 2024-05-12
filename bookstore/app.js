//constants
const express = require("express");
const app = express();
const morgan = require("morgan");

const orderRoutes = require("./api/routes/orders");
const customerRoutes = require("./api/routes/customers");

//provides more information on console
app.use(morgan("dev"));

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
