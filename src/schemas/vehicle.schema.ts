import {z} from "zod"

export const vehicleSchema = z.object({
    Placa: z.string().max(8).nonempty(),
    Marca: z.string().max(50).nonempty(),
    Modelo: z.string().max(50).nonempty(),
    Ano: z.number(),
    Cor: z.string().max(20).nonempty(),
    CPFmotorista : z.string().max(14).nonempty(),
})

export type Vehicle = z.infer<typeof vehicleSchema>;