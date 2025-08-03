'use client';

import { usePathname } from "next/navigation";

export default function FooterComponent() {
    const pathname = usePathname();
    return (
        <footer className={`w-full min-h-full flex justify-center font-bree lg:text-sm text-xs ${pathname !== '/' && 'text-white bg-green-700'} text-green-700 py-8 px-6 cursor-default`}>
            <section className="w-full max-w-5xl flex justify-between">
                <ul className="w-full max-w-56 flex flex-col gap-2">
                    <li>Empresa especializada em soluções financeiras como:</li>
                    <li className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>EMPRÉSTIMOS</li>
                    <li className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>NEGOCIAÇÕES</li>
                    <li className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>SAQUE FGTS</li>
                    <li className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>ENTRE OUTROS…</li>
                </ul>
                <div className="w-full max-w-56 text-end">
                    <p>Correspondente bancário autorizado pela <strong className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>FEBRABAN</strong> Código: <strong className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>546.55677.777-90</strong></p>
                    <p>CNPJ: <strong className={`${pathname !== '/' && 'text-yellow-500'} text-blue-700`}>41.313.421/0001-50</strong></p>
                </div>
            </section>
        </footer>
    );
}