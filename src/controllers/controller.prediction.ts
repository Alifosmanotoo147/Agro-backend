import { connectToDatabase } from "../database";
import Prediction from "../database/models/model.prediction";
import User from "../database/models/models.customer";


// Controller to add a prediction
export const addPrediction = async (req, res) => {
    await connectToDatabase()
  try {
    const {  N, P, K, soilMoisture, pH, humidity, temperature } = req.body;

   
    // Create a new prediction
    const newPrediction = new Prediction({
      N,
      P,
      K,
      soilMoisture,
      pH,
      humidity,
      temperature,
    });

    // Save the prediction
    await newPrediction.save();
    return res.status(201).json({ message: 'Prediction added successfully', prediction: newPrediction });
  } catch (error) {
    console.error('Error adding prediction:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


// Controller to get predictions
export const getPredictions = async (req, res) => {
    try {
     
  await connectToDatabase()
    const  predictions = await Prediction.find();
  
      return res.status(200).json(predictions);

    } catch (error) {
      console.error('Error retrieving predictions:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

}