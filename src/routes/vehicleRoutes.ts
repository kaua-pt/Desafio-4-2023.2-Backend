import { Router } from "express";
import { vehicleSchema } from "../schemas/vehicle.schema";
import vehicleRepository from "../repositories/vehicleRepository";

const router = Router();

router.post("/create", async (req, res) => {
    const {placa,marca,modelo,ano,cor} = vehicleSchema.parse(req.body);
    await vehicleRepository.createVehicle(placa,marca,cor,ano,modelo);
    return res.status(200);
});

router.get("/readAll", async (req, res) => {
    const vehicles = await vehicleRepository.readVehicles();
    if(vehicles.length < 1)
        return res.status(404);
    return res.json(vehicles).status(200)
});


export default router;

