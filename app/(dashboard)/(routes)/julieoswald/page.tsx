'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AboutJulie = () => {
    const pagename = "Iwwert mech";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col 2xl:flex-row gap-8 mb-8 items-center">
                    {/* Imagen con marco orgánico y límite de altura */}
                    <div className="flex items-center justify-center"> {/* Contenedor centrado */}
                        <div className="inline-flex border-2 border-jul-green rounded-full overflow-hidden shadow-md"> {/* Borde directamente en el contenedor de la imagen */}
                            <Image
                                src="/Main_Julie.jpg"
                                alt="Julie"
                                width={500}
                                height={500}
                                className="object-cover rounded-full max-h-[33.33vh] 2xl:max-h-[60vh]" // Redondeado aplicado directamente a la imagen
                                style={{
                                    // maxHeight: '50vh',
                                    minHeight: '300px',
                                    width: 'auto', // Ancho automático según proporción
                                    height: 'auto', // Altura automática según proporción
                                    maxWidth: '100%', // Limitar ancho máximo
                                }}
                            />
                        </div>
                    </div>

                    {/* Texto con diseño orgánico */}
                    <div className="w-full xl:w-2/3 space-y-6 p-6 rounded-2xl shadow-lg ">
                        <h2 className="text-3xl font-bold text-jul-green mb-4">Julie Oswald</h2>

                        <div className="space-y-4 text-justify">
                            <p className="text-lg leading-relaxed text-zinc-700">
                                Mäin Numm ass Julie an ech si Mamm vun zwee wonnerbare Kanner.
                                Mäin wandelbare Beruff als Educatrice huet mech mat villen Joren Erfarung a villen Weiderbildungen endlech zu mengem eegene klengen Dram gefouert.
                            </p>

                            <p className="text-lg leading-relaxed text-zinc-700">
                                An engem ganz klengen a gemittleche Kader bidden ech iech flott Aktivitéiten a Workshops u ronderëm d'Schwangerschaft, d'Familljeliewen, d’Klengkandentwécklung, souwéi och individuell Seancë fir äert d'Wuelbefannen.
                            </p>

                            <p className="text-lg leading-relaxed text-zinc-700">
                                Ech bidden iech e Raum fir är Wënsch, Iddien an awer och är Suergen a Froen.
                            </p>

                            <div className="bg-jul-gold/10 p-4 rounded-xl border-l-2 border-jul-red">
                                <p className="text-lg italic text-zinc-700">
                                    "An menger Cabane soll jiddereen sech wuelfillen an sech frei entfale kennen, Grouss wéi Kleng.
                                    Ech freeë mech op vill flott Momenter mat iech all !"
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
                            {/* <Button
                                className="bg-jul-red text-white hover:bg-jul-red/90"
                                onClick={() => window.open("https://calendly.com/julie-consultas", '_blank')}
                            >
                                Termin vereenbaren
                            </Button> */}

                            <div className="w-full flex flex-col gap-2 text-zinc-600">

                                {/* <span className="text-2xl">👩👧👦</span> */}
                                <span className="text-sm italic">Zertifizéiert Educatrice
                                </span>
                                <span className="text-sm italic">Einfach-Eltern-Kursleederin
                                </span>
                                <span className="text-sm italic">Familljeberoderin & -Begleederin
                                </span>
                                <span className="text-sm italic">Divers Formatiounen a verschiddenen Beräicher
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating elements personalizados */}
            <FloatingElements />
        </div>
    );
};

export default AboutJulie;