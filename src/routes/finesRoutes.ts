import { Router } from "express";
import { finesSchema } from "../schemas/fines.schema";
import finesRepository from "../repositories/finesRepository";

const router = Router();

router.post("/create", async (req, res) => {
    const {valor, dataDaMulta, pontos, tipoDeInfracao,placaVeiculo} = finesSchema.parse(req.body);
    await finesRepository.createFines(valor, dataDaMulta, pontos, tipoDeInfracao,placaVeiculo);
    return res.status(200);
});

export default router;

