//constants
const express = require("express");
const app = express();
const morgan = require("morgan");

const orderRoutes = require("./api/routes/orders");
const customerRoutes = require("./api/routes/customers");

app.use(morgan("dev"));

//Routes to handle requests
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

module.exports = app;
