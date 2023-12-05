const fs = require("fs");

const data = JSON.parse(fs.readFileSync('data.json'));

let products = data.products;

const checkHeartbeat = (_, res) => {
  res.send("App is running fine!");
};

const getAllProducts = (_, res) => {
  res.send(products);
};

const getProductById = (req, res) => {
  const productId = Number(req.params.productId);
  const product = products.find(product => product.id === productId) || {};
  if (product.id) {
    res.send(product);
  } else {
    res.status(404).send("Product Not Found");
  }
};

const createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).send("Successfully added");
};

const replaceProduct = (req, res) => {
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  products.splice(productIdx, 1, { ...req.body, id: productId });
  res.status(201).send("Successfully Updated!");
};

const updateProduct = (req, res) => {
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  const product = products[productIdx];
  products.splice(productIdx, 1, { ...product, ...req.body });
  res.status(201).send("Successfully Updated!");
};

const deleteProduct = (req, res) => {
  const productId = Number(req.params.productId);
  const productIdx = products.findIndex(product => product.id === productId);
  const product = products[productIdx];
  products.splice(productIdx, 1);
  res.status(201).json(product);
}

const deleteAllProducts = (_, res) => {
  products = [];
  res.status(200).send("Khatam! Tata! Bye Bye!");
};

module.exports = {
  checkHeartbeat,
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts
};