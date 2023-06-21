import { z } from "zod";

export const formSchemaTechRegister = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    level: z.string().min(1, "O nível é obrigatório"),
})