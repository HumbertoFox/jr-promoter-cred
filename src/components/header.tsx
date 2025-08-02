'use client';

import Link from 'next/link';

export default function HeaderComponent() {
    return (
        <header className="min-w-full flex justify-center py-6">
            <div className="max-w-5xl flex flex-col">
                <h1 className="max-w-xl font-bree lg:text-3xl text-2xl text-center text-green-700">
                    <Link href="/">J&R Promotora de Crédito</Link>
                </h1>
                <p className="lg:text-lg text-xs text-yellow-500 font-bree">
                    <strong className="text-red-600">&#40; </strong>
                    Atenção nenhum valor é cobrado para liberar seu empréstimo!
                    <strong className="text-red-600"> &#41;</strong>
                </p>
            </div>
        </header>
    );
}