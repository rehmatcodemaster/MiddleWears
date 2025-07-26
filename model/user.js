const mongoose = require('mongoose');
// User Schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  job_title: String,
  gender: String,
});
// Model
const User = mongoose.model('User', userSchema);

module.exports = User;

