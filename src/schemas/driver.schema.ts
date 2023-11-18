import {z} from "zod"

export const driverSchema = z.object({
    cpf:z.string().max(14).nonempty(),
    nome:z.string().max(50).nonempty(),
    vencimentoDaCnh: z.date(),
    categoriaDaCnh: z.string().max(2).nonempty(),
    pontos: z.number().int().positive(),
});

export type Driver = z.infer<typeof driverSchema>