import { Router } from "express";
import { login, logout, register, verifyAccount } from "../controllers/controllers.auth";
import { addPrediction, getPredictions } from "../controllers/controller.prediction";

const router = Router()

router.post("/prediction-input", addPrediction)
router.get("/", getPredictions)




export default router