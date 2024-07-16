const express = require('express');
const router = express.Router();
const Education = require('../Models/Education');

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
