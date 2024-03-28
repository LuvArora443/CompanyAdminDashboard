// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const reportRoutes = require('./routes/reportRoutes');
// const chargerRoutes = require('./routes/chargerRoutes'); // Import charger routes
// const driverRoutes = require('./routes/driverRoutes'); // Import charger routes
// const scheduleRoutes = require('./routes/scheduleRoutes'); // Import charger routes
// const vehicleRoutes = require('./routes/vehicleRoutes'); // Import charger routes

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/electryIt', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Routes
// app.use('/api/reports', reportRoutes);
// app.use('/api/chargers', chargerRoutes); // Use charger routes
// app.use('/api/drivers', driverRoutes); // Use charger routes
// app.use('/api/schedules', scheduleRoutes); // Use charger routes
// app.use('/api/vehicles', vehicleRoutes); // Use charger routes

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes');
const chargerRoutes = require('./routes/chargerRoutes');
const driverRoutes = require('./routes/driverRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://luvarora2003:luvaroranec2003@electrifyit.flexyli.mongodb.net/electryIt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // You can optionally add more options here, such as retryWrites and appName
});

// Routes
app.use('/api/reports', reportRoutes);
app.use('/api/chargers', chargerRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
