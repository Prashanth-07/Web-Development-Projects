// bmi-calculator-server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// PostgreSQL connection pool configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bmi_calculator',
  password: 'Gkrp@#321',
  port: 5432,
});

// API endpoint to add BMI data to the database
app.post('/bmi/add', async (req, res) => {
  const { name, height, weight, bmi } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO bmi_data (name, height, weight, bmi) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, height, weight, bmi]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding to the database', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
