const express = require("express");
const app = express();

const productRouter = require("./routes/productRoutes");

app.use(express.json());

app.use("/", productRouter.router);

app.listen(8080, () => {
  console.log("Server started. You can access it on http://localhost:8080");
});