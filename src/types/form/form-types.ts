import { z } from 'zod';
import { LoginSchema } from '../../utils/validation.util';

export interface RegisterForm {
    password: string;
    passwordRepeat: string;
    email: string;
    firstName: string;
    lastName: string;
    rulesAccepted: boolean; 
    // yearsOfPlayingPiano: number;
}

export type LoginForm = z.infer<typeof LoginSchema>