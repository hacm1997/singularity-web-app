import { z } from "zod";

export const registerUserSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    Name: z.string(),
    LastName: z.string(),
    IsMilitar: z.boolean(),
    isTemporal: z.boolean(),
    Document: z.string(),
    PlaceExpedition: z.string(),
    DateExpedition: z.string(),
    Address: z.string(),
    City: z.string(),
    Phone: z.string(),
    CelPhone: z.string(),
    EmergencyName: z.string(),
    EmergencyPhone: z.string(),
    password: z
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-Z]/, "Debe incluir al menos una letra mayúscula")
        .regex(/[a-z]/, "Debe incluir al menos una letra minúscula")
        .regex(/[0-9]/, "Debe incluir al menos un número")
        .regex(/[^a-zA-Z0-9]/, "Debe incluir al menos un carácter especial"),
    confirmPassword: z
        .string()
        .min(8),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});

export type registerUserFormModel = z.infer<typeof registerUserSchema>;