const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc get ALL contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id});
  res.status(200).json(contacts);
});

// @desc create a new contact
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
  const { name, email , age} = req.body;
  if (!name || !age || !email) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const contact = await Contact.create({
    name, email, age, user_id: req.user.id
  });
  res.status(201).json(contact);
});

// @desc update contact by ID
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
  );
  res.status(200).json(updatedContact);
});

// @desc delete contact by ID
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await contact.deleteOne();
  res.status(200).json(contact);
});

// @desc get contact by ID
// @route GET /api/contacts/:id
// @access private
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

module.exports = {getContacts, createContact, updateContact, deleteContact, getContactById};