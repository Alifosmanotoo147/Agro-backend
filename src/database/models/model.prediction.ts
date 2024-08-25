import { model, models, Schema } from "mongoose";


const predictionSchema = new Schema({
 
    N: { type: Number, required: false },
    P: { type: Number, required: false},
    K: { type: Number, required: false },
    soilMoisture: { type: Number, required: false },
    pH: { type: Number, required: false},
    humidity: { type: Number, required: false},
    temperature: { type: Number, required: false },
    createdAt: { type: Date, default: Date.now }
  });


  const Prediction = models.Prediction || model("Prediction", predictionSchema)
  export default Prediction  