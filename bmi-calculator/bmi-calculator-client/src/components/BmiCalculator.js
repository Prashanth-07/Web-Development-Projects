// src/components/BmiCalculator.js
import React, { useState } from 'react';
import axios from 'axios';
import './BmiCalculator.css'; // Import the CSS file

const BmiCalculator = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters ** 2);
    setBmi(calculatedBmi.toFixed(2));
  };

  const saveToDatabase = () => {
    axios.post('http://localhost:3001/bmi/add', { name, height, weight, bmi })
      .then(response => {
        console.log(response.data);
        alert('Data added to the database successfully!');
      })
      .catch(error => {
        console.error('Error adding to the database', error);
        alert('Error adding data to the database. Please try again.');
      });
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <div>
        <label className="label">Name:</label>
        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="label">Height (cm):</label>
        <input type="number" className="input" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label className="label">Weight (kg):</label>
        <input type="number" className="input" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="button-container">
        <button className="button calculate-button" onClick={calculateBmi}>Calculate BMI</button>
        <button className="button add-button" onClick={saveToDatabase}>Add to Database</button>
      </div>
      {bmi && <div>Your BMI: {bmi}</div>}
    </div>
  );
};

export default BmiCalculator;
