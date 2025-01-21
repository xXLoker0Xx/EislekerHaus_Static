'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const babyboogie = () => {
    const pagename = "Baby Boogie";

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex w-full">
                        <Image
                            src="/BabyBoogie.png"
                            alt="Baby Boogie"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md max-h-[480px] w-full object-cover"
                        />
                    </div>
                </div>

                {/* Contenedor principal en flex */}
                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">

                    {/* Textos */}
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">De Cours vun 0 - 36 Méint</h2>
                            <p className="text-jul-purple text-lg font-semibold">ERLIEFT MUSIK ZESUMMEN!</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            BabyBoogie ass en Danzkonzept fir Eltere mat hire Puppelcher vun 0 bis 36 Méint. Spaass steet un
                            éischter Stell! Beim BabyBoogie geet et virun allem dorëms Qualitéit-Zäit mat Ärem Kand ze verbréngen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Déi harmonesch Atmosphär, d'Musek an d'Beweegung kreéiere schéi Momenter, déi d'Elteren a Puppelcher
                            zesummen erliewen. Zesummen danze fërdert och déi enk Verbindung tëscht iech an ärem Kand. Dat
                            Kierperlecht Zesummespill an d‘ Interaktioun kënnen eng déif emotional Verbindung kreéieren.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Vun Ufank u gi Puppelcher spilleresch an hirer motorescher a kognitiver Entwécklung duerch Musek an
                            Danz ënnerstëtzt. Och déi Kleng kënnen hir éischt sozial Kontakter an dësem Cours maachen an an engem
                            secheren Ëmfeld sech ausprobéieren.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Déi entspaant, lëschteg Atmosphär hëlleft den Elteren de Stress vum Alldag hannert sech ze loossen an
                            hir Zäit mat hirem Puppelche voll ze genéissen.
                        </p>

                        <div>
                            <Button
                                className="bg-jul-red text-white hover:bg-jul-red/90"
                                onClick={() => window.open("https://example.com", '_blank')}
                            >
                                Mell mech un!
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div >
    );
};

export default babyboogie;
