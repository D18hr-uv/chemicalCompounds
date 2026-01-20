const express = require('express');
const router = express.Router();
const Compound = require('../models/compound.model');

// CREATE COMPOUND
router.post('/', async (req, res) => {
  try {
    console.log('REQ BODY:', req.body); // 👈 IMPORTANT DEBUG

    const { name, image, description } = req.body;

    if (!name || !image || !description) {
      return res.status(400).json({
        message: 'All fields (name, image, description) are required'
      });
    }

    const compound = await Compound.create({
      name,
      image,
      description
    });

    return res.status(201).json(compound);

  } catch (err) {
    console.error('CREATE ERROR:', err);
    return res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;
