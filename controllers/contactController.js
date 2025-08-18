//@desc get ALL contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "List of contacts" });
}

// @desc create a new contact
// @route POST /api/contacts
// @access Public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
}

// @desc update contact by ID
// @route PUT /api/contacts/:id
// @access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Updating Contact for ${req.params.id}`});
}

// @desc delete contact by ID
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Deleting Contact with ID ${req.params.id}` });
}

// @desc get contact by ID
// @route GET /api/contacts/:id
// @access Public
const getContactById = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}`});
}

module.exports = {getContacts, createContact, updateContact, deleteContact, getContactById};