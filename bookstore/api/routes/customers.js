const express = require("express");
const router = express.Router();

//Handling incoming GET requests to /customers
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Customer list",
  });
});

//Handling incoming POST requests to /customers
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Customer created",
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
