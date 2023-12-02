const express = require("express");
const fs = require("fs");
const app = express();

const data = JSON.parse(fs.readFileSync('data.json'));

const products = data.products;

app.use(express.json());

// GET Operations
app.get("/heartbeat", (_, res) => {
  res.send("App is running fine!");
});

app.get("/products", (_, res) => {
  res.send(products);
});

app.get("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const product = products.find(product => product.id === productId) || {};
  if (product.id) {
    res.send(product);
  } else {
    res.status(404).send("Product Not Found");
  }
});

// POST Operations
app.post("/product", (req, res) => {
  products.push(req.body);
  res.status(201).send("Successfully added");
});

// PUT Operations
app.put("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  products.splice(productIdx, 1, { ...req.body, id: productId });
  res.status(201).send("Successfully Updated!");
});

app.listen(8080, () => {
  console.log("Server started. You can access it on http://localhost:8080");
});