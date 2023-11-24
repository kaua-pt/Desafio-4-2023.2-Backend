import { Router } from "express";
import { vehicleSchema } from "../schemas/vehicle.schema";
import vehicleRepository from "../repositories/vehicleRepository";

const router = Router();

router.post("/create", async (req, res) => {
    const {Placa,Marca,Modelo,Ano,Cor,CPFmotorista} = vehicleSchema.parse(req.body);
    await vehicleRepository.createVehicle(Placa,Marca,Cor,Ano,Modelo,CPFmotorista);
    return res.status(201);
});

export default router;

