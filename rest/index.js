const express = require("express");
const fs = require("fs");
const app = express();

const data = JSON.parse(fs.readFileSync('data.json'));

let products = data.products;

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

// POST Operation
app.post("/product", (req, res) => {
  products.push(req.body);
  res.status(201).send("Successfully added");
});

// PUT Operation
app.put("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  products.splice(productIdx, 1, { ...req.body, id: productId });
  res.status(201).send("Successfully Updated!");
});

// PATCH Operation
app.patch("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  const product = products[productIdx];
  products.splice(productIdx, 1, { ...product, ...req.body });
  res.status(201).send("Successfully Updated!");
});

// Delete Operation
app.delete("/products/:productId", (req, res) => {
  console.log("Here!");
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  const product = products[productIdx];
  products.splice(productIdx, 1);
  res.status(201).json(product);
});

// DO NOT USE - INTERN
app.delete("/products", (_, res) => {
  console.log("There!");
  products = [];
  res.status(200).send("Khatam! Tata! Bye Bye!");
});

app.listen(8080, () => {
  console.log("Server started. You can access it on http://localhost:8080");
});