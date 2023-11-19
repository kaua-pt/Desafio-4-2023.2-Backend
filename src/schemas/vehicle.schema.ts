import {z} from "zod"

export const vehicleSchema = z.object({
    placa: z.string().max(8).nonempty(),
    marca: z.string().max(50).nonempty(),
    modelo: z.string().max(50).nonempty(),
    ano: z.number(),
    cor: z.string().max(20).nonempty(),
    CPFmotorista : z.string().max(14).nonempty(),
})

export type Vehicle = z.infer<typeof vehicleSchema>;