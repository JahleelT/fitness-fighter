require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');


const app = express();
const router = express.Router();


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Fitness Tracker API is running...');
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));