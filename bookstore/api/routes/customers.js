const express = require("express");
const router = express.Router();

const Customers = require("../../models/Customers.js");

//Handling incoming GET requests to /customers
router.get("/", (req, res, next) => {
  Customers.findAll() // Get all customers
    .then((customers) => {
      res.status(200).json({
        message: "Customer list",
        customers: customers, // Include actual customer data
      });
    })
    .catch((err) => {
      console.error(err); // Handle errors gracefully (optional)
      next(err); // Pass error to middleware for handling
    });
});

//Handling incoming POST requests to /customers
router.post("/", (req, res, next) => {
  const customer = {
    customerId: req.body.customerId,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  };

  res.status(200).json({
    message: "Customer created",
    createdCustomer: customer,
  });
});

router.get("/:customerId", (req, res, next) => {
  res.status(200).json({
    message: "Customer details",
    customerId: req.params.customerId,
  });
});

router.delete("/:customerId", (req, res, next) => {
  res.status(200).json({
    message: "Customer Deleted",
  });
});

module.exports = router;
