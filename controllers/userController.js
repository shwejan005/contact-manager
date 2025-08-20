const asyncHandler = require('express-async-handler');

// @desc Register a user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json ({ message: "Register the user" });
})

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json ({ message: "Login the user" });
})

// @desc Get the current user
// @route GET /api/users/current
// @access Private
const currUser = asyncHandler(async (req, res) => {
  res.json ({ message: "Current user" });
})

module.exports = { registerUser, loginUser, currUser };