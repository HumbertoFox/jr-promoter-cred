import { object, string } from 'zod';
import { getCheckedCpf } from './checkedcpf';

export const scholarshipSchema = object({
    name: string()
        .min(1, 'O campo E-mail é obrigatório!'),
    cpf: string()
        .min(1, "O campo E-mail é obrigatório!")
        .regex(/^\d{11}$/, { message: 'Apenas 11 números' })
        .refine((cpf) => getCheckedCpf(cpf), {
            message: 'CPF inválido',
        }),
    nis: string()
        .min(1, 'O campo NIS é obrigatório!')
        .regex(/^\d{11}$/, { message: 'Apenas 11 números' }),
    bemefitvalue: string()
        .min(1, 'O campo Telefone é obrigatório!'),
    phone: string()
        .min(1, 'O campo Telefone é obrigatório!')
})

export const energySchema = object({
    name: string()
        .min(1, 'O campo E-mail é obrigatório!'),
    cpf: string()
        .min(1, "O campo E-mail é obrigatório!")
        .regex(/^\d{11}$/, { message: 'Apenas 11 números' })
        .refine((cpf) => getCheckedCpf(cpf), {
            message: 'CPF inválido',
        }),
    dateofbirth: string()
        .min(1, 'O campo Data é obrigatório!'),
    zipcode: string()
        .min(1, 'O campo CEP é obrigatório!'),
    phone: string()
        .min(1, 'O campo Telefone é obrigatório!')
})

export const fgtsSchema = object({
    name: string()
        .min(1, 'O campo E-mail é obrigatório!'),
    cpf: string()
        .min(1, "O campo E-mail é obrigatório!")
        .regex(/^\d{11}$/, { message: 'Apenas 11 números' })
        .refine((cpf) => getCheckedCpf(cpf), {
            message: 'CPF inválido',
        }),
    phone: string()
        .min(1, 'O campo Telefone é obrigatório!')
})

export type FormStateScholarship =
    | {
        errors?: {
            name?: string[];
            cpf?: string[];
            nis?: string[];
            bemefitvalue?: string[];
            phone?: string[];
        }
        message?: boolean;
        warning?: string;
    } | undefined;

export type FormStateEnergy =
    | {
        errors?: {
            name?: string[];
            cpf?: string[];
            dateofbirth?: string[];
            zipcode?: string[];
            phone?: string[];
        }
        message?: boolean;
        warning?: string;
    } | undefined;

export type FormStateFgts =
    | {
        errors?: {
            name?: string[];
            cpf?: string[];
            phone?: string[];
        }
        message?: boolean;
        warning?: string;
    } | undefined;