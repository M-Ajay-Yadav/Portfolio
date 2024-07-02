const mongoose = require('mongoose');

const PersonalInfoSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  email: String,
  phone: String,
  address: String,
  education: Object,
  skills: Array,
  softSkills: Array,
  languages: Array,
  about: String,
  projects: Array
});

module.exports = mongoose.model('PersonalInfo', PersonalInfoSchema);
