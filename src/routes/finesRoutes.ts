import { Router } from "express";
import { finesSchema } from "../schemas/fines.schema";
import finesRepository from "../repositories/finesRepository";

const router = Router();

router.post("/create", async (req, res) => {
    const {valor, dataDaMulta, pontos, tipoDeInfracao} = finesSchema.parse(req.body);
    await finesRepository.createFines(valor, dataDaMulta, pontos, tipoDeInfracao);
    return res.status(200);
});

router.get("/readAll", async (req, res) => {
    const fines = await finesRepository.readFines();
    if(fines.length < 1)
        return res.status(404);
    return res.json(fines).status(200)
});


export default router;

