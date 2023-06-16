import { z } from "zod";

export const formSchema = z.object({
    email: z.string().min(3, "O email é obrigatório")
    .email("O email é obrigatório"),
    password: z.string().min(1, "A Senha é obrigatória"),
})