import {z} from "zod"

export const driverSchema = z.object({
    CPF:z.string().max(14).nonempty(),
    Nome:z.string().max(100).nonempty(),
    VencimentoCNH: z.date(),
    CategoriaCNH: z.string().max(2).nonempty(),
});

export type Driver = z.infer<typeof driverSchema>