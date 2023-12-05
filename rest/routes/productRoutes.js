const express = require("express");

const {
  checkHeartbeat,
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts
} = require("../controllers/product");

const router = express.Router(); // This method sets up router for you

// GET Operations
router.get("/heartbeat", checkHeartbeat);
router.get("/products", getAllProducts);
router.get("/products/:productId", getProductById);

// POST Operation
router.post("/product", createProduct);

// PUT Operation
router.put("/products/:productId", replaceProduct);

// PATCH Operation
router.patch("/products/:productId", updateProduct);

// Delete Operation
router.delete("/products/:productId", deleteProduct);

// DO NOT USE - INTERN
router.delete("/products", deleteAllProducts);

exports.router = router;
