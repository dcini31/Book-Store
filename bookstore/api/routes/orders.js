const express = require("express");
const router = express.Router();

//Handling incoming GET requests to /orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /orders",
  });
});

//Handling incoming POST requests to /orders
router.post("/", (req, res, next) => {
  const order = {
    customerId: req.body.customerId,
    quantity: req.body.quantity,
    bookId: req.body.bookId,
  };
  res.status(200).json({
    message: "Handling POST requests to /orders",
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  if (id === "special") {
    res.status(200).json({
      message: "Test id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "ID passed",
    });
  }
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Update order",
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted order",
  });
});

module.exports = router;
