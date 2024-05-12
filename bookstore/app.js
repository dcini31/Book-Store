const express = require("express");
const app = express();

const orderRoutes = require("./api/routes/orders");
const customerRoutes = require("./api/routes/customers");

app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

module.exports = app;
