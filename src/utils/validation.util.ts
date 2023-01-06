import { z } from "zod";
import { ZodSchema } from "zod/lib";
import { fromZodError } from 'zod-validation-error';

export function checkValidation(data: any, schema: ZodSchema): string[] | null {
    const results = schema.safeParse(data);
    return results.success ? null : fromZodError(results.error, { issueSeparator: '<;>' }).message.replace('Validation error: ', '').split('<;>').map(e => e.slice(0, e.indexOf('. at') + 1));
};

// Schemas

export const LoginSchema = z
    .object({
        email: z.string().email('Your email is probably wrong.'),
        password: z.string().min(1, 'Password should not be empty.'),
        rememberMe: z.boolean(),
    })