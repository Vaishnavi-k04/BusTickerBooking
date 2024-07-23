const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username', // MySQL Workbench username
  password: 'your_password', // MySQL Workbench password
  database: 'bus_booking' // Database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('MySQL connected...');
});

// Booking endpoint
app.post('/book', (req, res) => {
  const { origin, destination, date, tickets, busType, paymentMethod } = req.body;
  const costPerSeat = busType === 'AC' ? 500 : 300;
  const totalCost = tickets * costPerSeat;

  const query = 'INSERT INTO bookings (origin, destination, date, tickets, busType, paymentMethod, totalCost) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [origin, destination, date, tickets, busType, paymentMethod, totalCost], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json({ message: 'Booking successful!', totalCost });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
