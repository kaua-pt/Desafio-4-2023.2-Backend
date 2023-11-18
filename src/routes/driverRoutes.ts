import { Router } from "express";
import {driverSchema } from "../schemas/driver.schema";
import driverRepository from "../repositories/driverRepository";


const router = Router();

router.post("/create", async (req, res) => {
    const {cpf,nome,vencimentoDaCnh,categoriaDaCnh,pontos} = driverSchema.parse(req.body);
    await driverRepository.createDriver(cpf,nome,vencimentoDaCnh,categoriaDaCnh,pontos);
    return res.status(200);
});

router.get("/readAll", async (req, res) => {
    const drivers = await driverRepository.readDrivers();
    if(drivers.length < 1)
        return res.status(404);
    return res.json(drivers).status(200);
});

router.get("/readThreePoints", async (req, res) => {
    const drivers = await driverRepository.readThreePointsDrivers();
    if(drivers.length < 1)
        return res.status(404);
    return res.json(drivers).status(200);
});


export default router;

