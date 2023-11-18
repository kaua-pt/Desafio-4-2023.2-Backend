import {z} from "zod"

export const vehicleSchema = z.object({
    placa: z.string().max(8).nonempty(),
    marca: z.string().max(15).nonempty(),
    modelo: z.string().max(15).nonempty(),
    ano: z.number(),
    cor: z.string().max(10).nonempty(),
})

export type Vehicle = z.infer<typeof vehicleSchema>;