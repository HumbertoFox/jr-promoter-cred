'use client';

import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import Link from 'next/link';
import gsap from 'gsap';

export default function StartComponent() {
    const buttonTextRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        gsap.to(buttonTextRef.current, {
            scale: 1.05,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });
        gsap.fromTo(card, {
            opacity: 0,
            x: -700
        }, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: 'power1.out'
        });
    }, []);
    return (
        <section className='min-w-full bg-cover bg-no-repeat bg-center lg:bg-[url("/bg/bg-home.jpg")] flex justify-center p-8'>
            <div className="w-1/4 lg:block hidden" />
            <Card
                ref={cardRef}
                className="w-full max-w-xl flex flex-col justify-between text-green-700 lg:text-2xl text-lg font-bree text-center lg:text-start bg-white p-5 opacity-0"
            >
                <p>1. Quer um empréstimo de quanto?</p>

                <p className="text-center">
                    R$<strong className="text-blue-700"> 75,00</strong> há R$<strong className="text-blue-700"> 75.000,00</strong>
                </p>

                <Link
                    href="/requestsdata"
                    className="bg-yellow-400 uppercase font-bold font-sans text-center lg:text-lg text-sm text-black lg:py-3 py-2 rounded-[6px] hover:bg-yellow-500 duration-500">
                    <span
                        ref={buttonTextRef}
                        className="inline-block"
                    >
                        Solicite já!
                    </span>
                </Link>

                <p>2. Como funciona o empréstimo J&R?</p>

                <p>3. Em poucos minutos, você faz o seu cadastro para uma análise de empréstimo pessoal online.</p>
            </Card>
        </section>
    );
}