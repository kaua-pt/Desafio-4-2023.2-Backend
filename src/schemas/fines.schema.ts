import {z} from "zod"

export const finesSchema = z.object({
    id : z.number().int().positive(),
    valor: z.number().int().positive(),
    dataDaMulta: z.date(),
    pontos: z.number().int().positive(),
    tipoDeInfracao: z.string().max(50).nonempty(),
});

export type Fines = z.infer<typeof finesSchema>;