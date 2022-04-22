const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use('/api', apiRoutes);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTING > API ROUTES
app.use('/api', apiRoutes);

// RESPONSE > DEFAULT REQUEST NOT FOUND - ANY OTHER
app.use((req, res) => {
  res.status(404).end();
});

// START SERVER > ANTE DB CONNECTION
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});