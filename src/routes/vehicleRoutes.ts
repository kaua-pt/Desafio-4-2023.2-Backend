import { Router } from "express";
import { vehicleSchema } from "../schemas/vehicle.schema";
import vehicleRepository from "../repositories/vehicleRepository";

const router = Router();

router.post("/create", async (req, res) => {
    const {placa,marca,modelo,ano,cor,CPFmotorista} = vehicleSchema.parse(req.body);
    await vehicleRepository.createVehicle(placa,marca,cor,ano,modelo,CPFmotorista);
    return res.status(200);
});

export default router;

