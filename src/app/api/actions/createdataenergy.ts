'use server';

import { energySchema, FormStateEnergy } from '@/lib/definitions';
import { redirect } from 'next/navigation';

export async function createDataEnergy(state: FormStateEnergy, formData: FormData): Promise<FormStateEnergy> {
    const validatedFields = energySchema.safeParse({
        name: formData.get('name') as string,
        cpf: formData.get('cpf') as string,
        dateofbirth: formData.get('dateofbirth') as string,
        zipcode: formData.get('zipcode') as string,
        phone: formData.get('phone') as string,
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors };

    const { name, cpf, dateofbirth, zipcode, phone } = validatedFields.data;

    redirect(`https://wa.me/81997933386?text=nome: ${name}%0Acpf: ${cpf}%0Adata de nascimento: ${dateofbirth}%0ACEP: ${zipcode}%0Atelefone: ${phone}`);
}