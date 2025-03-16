require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8001;
const router = express.Router();


app.use(express.json());
app.use(cors());

app.use('./routes/userRoutes.js', userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Fitness Tracker API is running...');
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));