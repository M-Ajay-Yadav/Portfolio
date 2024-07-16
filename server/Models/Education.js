const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  year: Number,
  description: String
});

module.exports = mongoose.model('Education', EducationSchema);
