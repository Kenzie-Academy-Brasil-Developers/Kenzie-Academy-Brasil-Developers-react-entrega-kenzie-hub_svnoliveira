import { z } from "zod";

export const formSchemaRegister = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(3, "O email é obrigatório")
    .email("O email é obrigatório"),
    password: z.string().min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[0-9])/, "É necessário ao menos um número")
    .regex(/(?=.*?[!@#$%^&*()\-__+.])/, "É necessário ao menos um caractere especial"),
    passwordConfirm: z.string(),
    bio: z.string().min(1, "Um comentário é obrigatório"),
    contact: z.string().min(1, "Um contato é obrigatório"),
    level: z.string().min( 6, "Selecione uma opção" ),
})
.refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"],
  })