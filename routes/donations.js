// server/routes/donations.js
const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/', async (req, res) => {
    const { amount } = req.body;

    try {
        // Create a new donation record
        const donation = await Donation.create({ amount });

        // Optionally save donation details to the database here

        res.status(200).json({ message: 'Donation recorded', donationId: donation._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Donation processing failed' });
    }
});

module.exports = router;
