import { Router } from "express";
import finesRepository from "../repositories/finesRepository";

const router = Router();

router.post("/create", async (req, res) => {
    const {Valor, DataDeVencimento, PontosPenalidade, TipoInfracao,Placaveiculo} = req.body;
    await finesRepository.createFines(Valor, DataDeVencimento, PontosPenalidade, TipoInfracao,Placaveiculo);
    return res.status(200);
});

export default router;

