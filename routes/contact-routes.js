const express = require("express");
const { getContacts, createContact, getContactById, updateContact, deleteContact } = require("../controllers/contactController");
const { validateToken } = require("../middleware/jwtTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContactById).put(updateContact).delete(deleteContact)

module.exports = router;