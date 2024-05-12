const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Customer list",
  });
});

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
