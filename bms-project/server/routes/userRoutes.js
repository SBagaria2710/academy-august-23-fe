const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", async (request, response) => {
  try {
    const userExists = await User.findOne({ email: request.body.email });

    if (userExists) {
      response.status(403).send({
        success: false,
        message: "User already exists",
      });
      return;
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    request.body.password = hashedPassword;

    const newUser = new User(request.body);
    await newUser.save();

    response.status(200).send({
      success: true,
      message: "Registration Successful. Please, login",
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      success: false,
      message: "Something went wrong. Please, check logs",
    });
  }
});

router.post("/login", async (request, response) => {
  const user = await User.findOne({ email: request.body.email });
  if (!user) {
    response.status(401).send({
      success: false,
      message: "Invalid Credentials",
    });
    return;
  }

  const validPassword = await bcrypt.compare(
    request.body.password,
    user.password
  );

  if (!validPassword) {
    response.status(401).send({
      success: false,
      message: "Invalid Credentials",
    });
    return;
  }

  const token = jwt.sign(
    { userId: user._id, emailId: user.email },
    process.env.jwt_secret,
    { expiresIn: "1d" }
  );

  response.status(200).send({
    success: true,
    message: "User Logged In",
    data: token,
  });
});

router.get("/get-current-user", authMiddleware, async (request,response) => {
  try {
    const user = await User.findById(request.body.userId).select("-password");
    response.send({
      success: true,
      message: "User details fetched successfully",
      data: user,
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
