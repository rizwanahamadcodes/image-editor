import { z } from "zod";
const newProjectSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required to create a project" })
        .max(50, "Name is too long, please make it shorter than 50 characters"),
    height: z.coerce
        .number({ invalid_type_error: "Please enter a number" })
        .gte(1, "Height is required to be greater than 1")
        .lte(4000, "Must be lower than 4000"),

    width: z.coerce
        .number({ invalid_type_error: "Please enter a number" })
        .gte(1, "Width is required to be greater than 1")
        .lte(4000, "Must be lower than 4000"),
});

export default newProjectSchema;

export type NewProjectSchema = z.infer<typeof newProjectSchema>;
