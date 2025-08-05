'use server';

import { scholarshipSchema, FormStateScholarship } from '@/lib/definitions';
import { redirect } from 'next/navigation';

export async function createDataScholarship(state: FormStateScholarship, formData: FormData): Promise<FormStateScholarship> {
    const validatedFields = scholarshipSchema.safeParse({
        name: formData.get('name') as string,
        cpf: formData.get('cpf') as string,
        nis: formData.get('nis') as string,
        bemefitvalue: formData.get('bemefitvalue') as string,
        phone: formData.get('phone') as string,
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors };

    const { name, cpf, nis, bemefitvalue, phone } = validatedFields.data;

    redirect(`https://wa.me/${process.env.MY_NUMBER_PHONE}?text=nome: ${name}%0Acpf: ${cpf}%0ANIS: ${nis}%0AValor do Benefício: ${bemefitvalue}%0Atelefone: ${phone}`)
}