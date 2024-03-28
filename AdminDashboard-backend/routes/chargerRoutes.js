// routes/reportRoutes.js

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const chargerSchema = new mongoose.Schema({
    id: Number,
    location:String,
    ports:Number,
    capactiy:String
  });
  

const Report = mongoose.model('Charger', chargerSchema);

// Get all reports

router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    console.log("bleh");
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
