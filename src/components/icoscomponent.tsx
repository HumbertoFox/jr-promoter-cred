import Image from 'next/image';

const steps = [
    {
        title: 'Selecione',
        description: 'O valor do seu empréstimo pessoal online..',
        icon: '/icons/cursor-be.svg',
    },
    {
        title: 'Informe',
        description: 'Seus dados cadastrais de forma segura e rápida.',
        icon: '/icons/pen-b.svg',
    },
    {
        title: 'Avaliação',
        description: 'Seu pedido de empréstimo pessoal é enviado para avaliação da instituição financeira.',
        icon: '/icons/clock-e.svg',
    },
    {
        title: 'Depósito',
        description: 'O dinheiro do seu crédito pessoal online é depositado diretamente na sua conta bancária em até 24 horas após a aprovação.',
        icon: '/icons/money-f.svg',
    },
]

export default function IconsComponent() {
    return (
        <div className="w-full flex justify-center bg-green-700 py-10">
            <section className="w-full max-w-5xl flex flex-col gap-9 px-6 text-center text-white">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="lg:text-3xl text-2xl font-bree">Como funciona o empréstimo J&R?</h2>
                    <p className="lg:text-lg text-sm font-open max-w-md">Em poucos minutos, você faz o seu cadastro para uma análise de empréstimo pessoal online.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex lg:flex-col gap-6 items-center">
                            <div className="flex justify-center items-center bg-white rounded-full lg:size-[67.5px] min-w-[60px] min-h-[60px]">
                                <Image
                                    src={step.icon}
                                    width={36}
                                    height={36}
                                    alt={step.title}
                                    className="size-8 lg:size-9"
                                />
                            </div>

                            {index !== steps.length - 1 && (
                                <>
                                    <div className="hidden lg:block absolute top-[33px] left-[140px] w-[200px] h-0.5 bg-white" />
                                    <div className="block lg:hidden absolute left-[30px] top-[60px] w-0.5 h-[70px] bg-white" />
                                </>
                            )}

                            <div className="lg:text-center text-start">
                                <h3 className="lg:text-lg uppercase font-bold">{step.title}</h3>
                                <p className="lg:text-[13px] text-xs">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}