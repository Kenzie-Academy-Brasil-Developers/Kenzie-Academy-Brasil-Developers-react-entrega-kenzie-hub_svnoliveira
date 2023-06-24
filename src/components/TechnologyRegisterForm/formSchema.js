import { z } from "zod"

export const formSchemaTechRegister = z.object({
    title: z.string().min(1, "O nome é obrigatório"),
    status: z.string().min(1, "O nível é obrigatório"),
})