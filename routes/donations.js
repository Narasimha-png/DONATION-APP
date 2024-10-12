const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/', async (req, res) => {
    const { amount } = req.body;

    try { 
        const donation = await Donation.create({ amount });
        res.status(200).json({ message: 'Donation recorded', donationId: donation._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Donation processing failed' });
    }
});

module.exports = router;
