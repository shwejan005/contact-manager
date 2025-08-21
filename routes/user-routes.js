const express = require("express");
const { registerUser, loginUser, currUser } = require("../controllers/userController");
const { validateToken } = require("../middleware/jwtTokenHandler");

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currUser);


module.exports = router;