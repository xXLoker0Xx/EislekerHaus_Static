'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const mellech = () => {
    const pagename = "Mëllech";

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex w-full">
                        <Image
                            src="/milch.png" // Cambia la ruta de la imagen según sea necesario
                            alt="Mëllech"
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
                            <h2 className="text-jul-red text-2xl font-bold">Mëllech</h2>
                            <p className="text-jul-purple text-lg font-semibold">Online a Präsenz</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Egal wéi dir äre Puppelche wëllt ernären, ob mat der Broscht oder der Fläsch – an dësem Workshop léiert dir alles wat dir wësse musst iwwer Stellen a Fläsch ginn.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Egal ob mir Stellen oder d'Fläsch ginn ... all Eltere wëllen datt hire Puppelche gutt versuergt gëtt an hir Ernärung sécher a gutt ass. Dir kritt d'Grondlagen iwwer Stellen a Fläschemëllesch a mir huelen eis eng Rei Ammenmärercher ënnert d Lupp.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Dëst sinn eis Themen:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wat sinn d'Hindernisser fir Stellen a wéi kann d'Stellen erfollegräich sinn?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wat wann ech net Stellen kann oder net Stellen well?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi gëtt genuch Mëllech fir Stellen produzéiert?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi wëssen d'Eltere wann de Puppelchen hongereg ass?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi oft a wéi laang muss de Puppelche Mëllech kréien?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Brauch de Puppelchen och an der Nuecht Mëllech?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi weess ech ob mäi Puppelche genuch Mëllech kritt?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi eng Liewensmëttel soll ee vermeide beim Stillen?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi laang brauch de Puppelche Mammemëllech oder Pre-Mëllech?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Ass de Puppelchen duerch Mëllech verwinnt?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kann de Puppelche Koumëllech, Waasser an Téi drénken?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Den Eisengehalt an der Mammemëllech a Pre-Mëllech</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kann ech Stellen wann de Puppelchen Zänn kritt?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Muss ech ophale mat Stellen wann ech Medikamenter huele muss?</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Fir wien ass dëse Workshop geduecht?
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Fir zukünfteg Eltere wärend der Schwangerschaft</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Fir nei Eltere mat Puppelcher an hirem éischte Liewensjoer</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Fir jiddereen deen um Thema interesséiert ass, Grousselteren a Familljememberen</li>
                        </ul>

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

export default mellech;