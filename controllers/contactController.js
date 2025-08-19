const asyncHandler = require('express-async-handler');

//@desc get ALL contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler (async (req, res) => {
  res.status(200).json({ message: "List of contacts" });
});

// @desc create a new contact
// @route POST /api/contacts
// @access Public
const createContact = asyncHandler (async (req, res) => {
  console.log("The request body is:", req.body);

  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  res.status(201).json({ message: "Create Contact" });
});

// @desc update contact by ID
// @route PUT /api/contacts/:id
// @access Public
const updateContact = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Updating Contact for ${req.params.id}`});
});

// @desc delete contact by ID
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Deleting Contact with ID ${req.params.id}` });
});

// @desc get contact by ID
// @route GET /api/contacts/:id
// @access Public
const getContactById = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}`});
});

module.exports = {getContacts, createContact, updateContact, deleteContact, getContactById};