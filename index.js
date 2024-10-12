const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const donationRoutes = require('./routes/donations');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.use('/api/donate', donationRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
