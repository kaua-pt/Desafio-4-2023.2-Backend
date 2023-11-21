import {z} from "zod"

export const finesSchema = z.object({
    id : z.number().int().positive(),
    Valor: z.number().int().positive(),
    DataDeVencimento: z.date(),
    PontosPenalidade: z.number().int().positive(),
    TipoInfracao: z.string().max(50).nonempty(),
    Placaveiculo: z.string().max(50).nonempty(),
});

export type Fines = z.infer<typeof finesSchema>;