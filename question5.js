const express = require('express');
const User = require('./models/User'); // Import the User model
const sequelize = require('./database/db'); // Import the sequelize instance

const app = express();
const port = 3000;

// Test database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return sequelize.sync(); // Sync all defined models to the DB
  })
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});