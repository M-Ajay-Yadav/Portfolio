const express = require('express');
const router = express.Router();
const PersonalInfo = require('../models/PersonalInfo');

// Get Personal Info
router.get('/', async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne();
    res.json(personalInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
