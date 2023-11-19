import {z} from "zod"

export const driverSchema = z.object({
    cpf:z.string().max(14).nonempty(),
    nome:z.string().max(100).nonempty(),
    vencimentoDaCnh: z.date(),
    categoriaDaCnh: z.string().max(2).nonempty(),
});

export type Driver = z.infer<typeof driverSchema>