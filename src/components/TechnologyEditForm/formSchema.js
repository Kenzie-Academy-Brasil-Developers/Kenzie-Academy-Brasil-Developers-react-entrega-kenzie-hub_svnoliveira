import { z } from "zod"

export const formSchemaTechEdit = z.object({
    title: z.string(),
    status: z.string(),
})