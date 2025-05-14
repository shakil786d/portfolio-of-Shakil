import React, { useState } from 'react';

const PredictDiabetes = () => {
  const [formData, setFormData] = useState({
    age: '',
    glucose: '',
    bloodPressure: '',
    insulin: '',
    bmi: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error predicting diabetes:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Diabetes Prediction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="glucose"
          placeholder="Glucose Level"
          value={formData.glucose}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="bloodPressure"
          placeholder="Blood Pressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="insulin"
          placeholder="Insulin Level"
          value={formData.insulin}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="bmi"
          placeholder="BMI"
          value={formData.bmi}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Predict
        </button>
      </form>
      {prediction && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Prediction Result:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default PredictDiabetes;
