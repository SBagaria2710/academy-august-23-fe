const mongoose = require("mongoose");

const DB = "mongodb+srv://shashwawtforwork:GPv6SXRW5isf74NI@cluster0.wkv4fmi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB, {}).then(() => {
  console.log("Connection Successful");
}).catch((err) => {
  console.log(err);
});