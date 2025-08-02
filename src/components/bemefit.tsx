'use client';

import { useState } from 'react';
import FormWhatsappScholarshipComponent from './form-whatsapp-scholarship';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormWhatsappEnergyComponent from './form-whatsapp-energy';
import FormWhatsappFgtsComponent from './form-whatsapp-fgts';

export default function BemefitComponent() {
    const [typeLoan, setTypeLoan] = useState<string | null>(null);
    return (
        <Card className="flex flex-col items-center bg-white p-5">
            <h1 className="lg:text-3xl text-2xl text-center text-green-700 font-bree">
                Faça agora mesmo uma simulação.
            </h1>
            <Select onValueChange={(value) => setTypeLoan(value)}>
                <SelectTrigger className="lg:w-2xs w-3xs lg:text-sm text-xs">
                    <SelectValue placeholder="Tipo de Empréstimo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="SCHOLARSHIP">EMPRÉSTIMO DO BOLSA FAMÍLIA</SelectItem>
                    <SelectItem value="ENERGY">EMPRÉSTIMO NA FATURA DE ENERGIA</SelectItem>
                    <SelectItem value="FGTS">ANTECIPAÇÃO DE SAQUE DO FGTS</SelectItem>
                </SelectContent>
            </Select>
            {typeLoan === 'SCHOLARSHIP' && <FormWhatsappScholarshipComponent />}
            {typeLoan === 'ENERGY' && <FormWhatsappEnergyComponent />}
            {typeLoan === 'FGTS' && <FormWhatsappFgtsComponent />}
        </Card>
    );
}