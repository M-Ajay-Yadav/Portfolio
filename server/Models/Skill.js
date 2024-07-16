const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: String,
  proficiency: String
});

module.exports = mongoose.model('Skill', SkillSchema);
