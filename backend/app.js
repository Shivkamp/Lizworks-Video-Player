// // app.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/public', express.static(path.join(__dirname, 'public')));

// // Database Connection
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log('Db Connected'))
//     .catch((err) => console.log(err));

// // Routes
// const videoRoutes = require('./routes/video');
// app.use('/api', videoRoutes);

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server is listening on ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Database Connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Db Connected'))
    .catch((err) => console.log(err));

// Routes
const videoRoutes = require('./routes/video');
app.use('/api', videoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
