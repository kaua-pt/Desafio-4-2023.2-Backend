import { Router } from "express";
import {driverSchema } from "../schemas/driver.schema";
import driverRepository from "../repositories/driverRepository";


const router = Router();

router.post("/create", async (req, res) => {
    const {CPF,Nome,VencimentoCNH,CategoriaCNH} = driverSchema.parse(req.body);
    await driverRepository.createDriver(CPF,Nome,VencimentoCNH,CategoriaCNH);
    return res.status(200);
});

router.get("/readAll", async (req, res) => {
    const drivers = await driverRepository.readDrivers();
    console.log("chegando");
    if(drivers.length < 1)
        return res.status(404);
    return res.json(drivers).status(200);
});

router.get("/readVehicles/:cpf", async (req, res) => {
    const vehicles = await driverRepository.readVehicles(req.params.cpf);
    if(vehicles.length < 1)
        return res.status(404);
    return res.json(vehicles).status(200);
});

router.get("/readFines/:cpf", async (req, res) => {
    const fines = await driverRepository.readFines(req.params.cpf);
    if(fines.length < 1)
        return res.status(404);
    return res.json(fines).status(200);
});

router.get("/readThreePoints", async (req, res) => {
    const drivers = await driverRepository.readThreePointsDrivers();
    if(drivers.length < 1)
        return res.status(404);
    return res.json(drivers).status(200);
});


export default router;

