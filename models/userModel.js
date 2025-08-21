const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  username: {
    type: String,
    required: [true, "Please add a username"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
}, {
  timestamps: true,
});


module.exports = mongoose.model("User", userSchema);