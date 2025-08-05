'use server';

import { fgtsSchema, FormStateFgts } from '@/lib/definitions';
import { redirect } from 'next/navigation';

export async function createDataFgts(state: FormStateFgts, formData: FormData): Promise<FormStateFgts> {
    const validatedFields = fgtsSchema.safeParse({
        name: formData.get('name') as string,
        cpf: formData.get('cpf') as string,
        phone: formData.get('phone') as string,
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors };

    const { name, cpf, phone } = validatedFields.data;

    redirect(`https://wa.me/${process.env.MY_NUMBER_PHONE}?text=nome: ${name}%0Acpf: ${cpf}%0Atelefone: ${phone}`);
}