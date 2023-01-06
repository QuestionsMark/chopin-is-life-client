import { useEffect, useState } from 'react';
import { ZodSchema } from "zod";
import { fromZodError } from "zod-validation-error";

export function useValidation(data: any, schema: ZodSchema): string[] | null {
    const [errors, setErrors] = useState<string[] | null>(null)
    useEffect(() => {
        const results = schema.safeParse(data);
        setErrors(!results.success ? fromZodError(results.error, { issueSeparator: '<;>', prefix: '', prefixSeparator: '' }).message.split('<;>').map(e => e.slice(0, e.indexOf('. at') + 1)) : null);
    }, [data, schema]);
    return errors;
}