import { z } from "zod";
const newProjectSchema = z.object({
    name: z.string().min(1, { message: "Firstname is required" }),
    height: z.coerce
        .number()
        .gte(1, "Must be 1 and above")
        .lte(4000, "Must be lower than 4000"),
    width: z.coerce
        .number()
        .gte(1, "Must be 1 and above")
        .lte(4000, "Must be lower than 4000"),
});

export default newProjectSchema;

export type NewProjectSchema = z.infer<typeof newProjectSchema>;
