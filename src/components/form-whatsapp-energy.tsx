'use client';

import { startTransition, useActionState, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import InputError from './input-error';
import { createDataEnergy } from '@/app/api/actions/createdataenergy';
import { Button } from './ui/button';
import { LoaderCircle } from 'lucide-react';

type RegisterForm = {
    name: string;
    cpf: string;
    dateofbirth: string;
    zipcode: string;
    phone: string;
};

export default function FormWhatsappEnergyComponent() {
    const [state, action, pending] = useActionState(createDataEnergy, undefined);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        let formattedValue = value;

        const onlyNumbers = value.replace(/\D/g, '');

        switch (id) {
            case 'cpf':
                if (onlyNumbers.length <= 3) {
                    formattedValue = onlyNumbers;
                } else if (onlyNumbers.length <= 6) {
                    formattedValue = onlyNumbers.slice(0, 3) + '.' + onlyNumbers.slice(3);
                } else if (onlyNumbers.length <= 9) {
                    formattedValue = onlyNumbers.slice(0, 3) + '.' + onlyNumbers.slice(3, 6) + '.' + onlyNumbers.slice(6);
                } else {
                    formattedValue = onlyNumbers.slice(0, 3) + '.' + onlyNumbers.slice(3, 6) + '.' + onlyNumbers.slice(6, 9) + '-' + onlyNumbers.slice(9, 11);
                }
                break;

            case 'dateofbirth':
                if (onlyNumbers.length <= 2) {
                    formattedValue = onlyNumbers;
                } else if (onlyNumbers.length <= 4) {
                    formattedValue = onlyNumbers.slice(0, 2) + '/' + onlyNumbers.slice(2);
                } else {
                    formattedValue = onlyNumbers.slice(0, 2) + '/' + onlyNumbers.slice(2, 4) + '/' + onlyNumbers.slice(4, 8);
                }
                break;

            case 'zipcode':
                if (onlyNumbers.length <= 2) {
                    formattedValue = onlyNumbers;
                } else if (onlyNumbers.length <= 5) {
                    formattedValue = onlyNumbers.slice(0, 2) + '.' + onlyNumbers.slice(2);
                } else {
                    formattedValue = onlyNumbers.slice(0, 2) + '.' + onlyNumbers.slice(2, 5) + '-' + onlyNumbers.slice(5, 8);
                }
                break;

            case 'phone':
                if (onlyNumbers.length <= 2) {
                    formattedValue = '(' + onlyNumbers;
                } else if (onlyNumbers.length <= 6) {
                    formattedValue = '(' + onlyNumbers.slice(0, 2) + ') ' + onlyNumbers.slice(2);
                } else if (onlyNumbers.length <= 10) {
                    formattedValue = '(' + onlyNumbers.slice(0, 2) + ') ' + onlyNumbers.slice(2, 7) + '-' + onlyNumbers.slice(7);
                } else {
                    formattedValue = '(' + onlyNumbers.slice(0, 2) + ') ' + onlyNumbers.slice(2, 7) + '-' + onlyNumbers.slice(7, 11);
                }
                break;

            default:
                formattedValue = value;
        }

        setData({ ...data, [id]: formattedValue });
    };
    const [data, setData] = useState<RegisterForm>({
        name: '',
        cpf: '',
        dateofbirth: '',
        zipcode: '',
        phone: '',
    });
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rawFormData = new FormData(e.currentTarget);

        const stripMask = (value: string | null) => value?.toString().replace(/\D/g, '') || '';

        rawFormData.set('cpf', stripMask(rawFormData.get('cpf') as string));
        rawFormData.set('dateofbirth', stripMask(rawFormData.get('dateofbirth') as string));
        rawFormData.set('zipcode', stripMask(rawFormData.get('zipcode') as string));
        rawFormData.set('phone', stripMask(rawFormData.get('phone') as string));

        startTransition(() => action(rawFormData));
    };
    return (
        <form className="w-full max-w-lg space-y-6 mx-auto" onSubmit={submit}>
            <div className="grid gap-2">
                <Label
                    htmlFor="name"
                    className="lg:text-sm text-xs"
                >
                    Nome completo *
                </Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    value={data.name}
                    onChange={handleChange}
                    disabled={pending}
                    placeholder="Nome completo"
                    className="lg:text-sm text-xs bg-gray-100 border border-gray-300"
                />
                {state?.errors?.name && <InputError message={state.errors.name} />}
            </div>

            <div className="grid gap-2">
                <Label
                    htmlFor="cpf"
                    className="lg:text-sm text-xs"
                >
                    CPF *
                </Label>
                <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    required
                    maxLength={14}
                    tabIndex={2}
                    autoComplete="cpf"
                    value={data.cpf}
                    onChange={handleChange}
                    disabled={pending}
                    placeholder="___.___.___-__"
                    className="lg:text-sm text-xs bg-gray-100 border border-gray-300"
                />
                {state?.errors?.cpf && <InputError message={state.errors.cpf} />}
            </div>

            <div className="grid gap-2">
                <Label
                    htmlFor="dateofbirth"
                    className="lg:text-sm text-xs"
                >
                    Data de Nascimento *
                </Label>
                <Input
                    id="dateofbirth"
                    name="dateofbirth"
                    type="text"
                    required
                    maxLength={10}
                    tabIndex={3}
                    value={data.dateofbirth}
                    onChange={handleChange}
                    placeholder="dd/mm/aaaa"
                    className="lg:text-sm text-xs bg-gray-100 border border-gray-300"
                />
                <InputError message={state?.errors?.dateofbirth} />
            </div>

            <div className="grid gap-2">
                <Label
                htmlFor="zipcode"
                className="lg:text-sm text-xs"
                >
                    CEP *
                    </Label>
                <Input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    required
                    maxLength={10}
                    tabIndex={4}
                    autoComplete="zipcode"
                    value={data.zipcode}
                    onChange={handleChange}
                    disabled={pending}
                    placeholder="00.000-000"
                    className="lg:text-sm text-xs bg-gray-100 border border-gray-300"
                />
                {state?.errors?.zipcode && <InputError message={state.errors.zipcode} />}
            </div>

            <div className="grid gap-2">
                <Label
                htmlFor="phone"
                className="lg:text-sm text-xs"
                >
                    Telefone celular *
                </Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={15}
                    tabIndex={5}
                    value={data.phone}
                    onChange={handleChange}
                    placeholder="(__) ____-____"
                    className="lg:text-sm text-xs bg-gray-100 border border-gray-300"
                />
                {state?.errors?.phone && <InputError message={state?.errors?.phone} />}
            </div>

            <Button
                type="submit"
                tabIndex={6}
                disabled={pending}
                className="mt-4 w-full uppercase lg:text-sm text-xs bg-yellow-400 text-black font-bold hover:bg-yellow-500"
            >
                Solicitar
                {pending && <LoaderCircle className="h-4 w-4 animate-spin" />}
            </Button>
        </form>
    );
}