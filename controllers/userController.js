const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt')
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// @desc Register a user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({email});
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(`Hashed password : ${hashedPassword}`);

  const user = await User.create({
    username,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({_id: user.id, email: user.email})
    console.log("User created");
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
})

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please add all fields" });
  }
  const user = await User.findOne({email});
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({
      user: {
        username: user.username,
        email: user.email,
        id: user.id
      },
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })
    res.json({
      accessToken,
      user: {
        _id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// @desc Get the current user
// @route GET /api/users/current
// @access Private
const currUser = asyncHandler(async (req, res) => {
  res.send(req.user);
})

module.exports = { registerUser, loginUser, currUser };