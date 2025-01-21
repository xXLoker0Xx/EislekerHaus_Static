'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const minisignsCourse = () => {
    const pagename = 'MiniSigns';

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex w-full">
                        <Image
                            src="/mini-signs.png"
                            alt="MiniSigns"
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
                            <h2 className="text-jul-red text-2xl font-bold">MiniSigns® fir Elteren a Puppelcher</h2>
                            <p className="text-jul-purple text-lg font-semibold">Online & Präsenz</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            MiniSigns® ass e Cours fir Eltere mat hire Puppelcher tëscht 6 an 18 Méint. Déi Kleng gi mat vill Spaass, Spiller, Lidder a Musek duerch d‘Stonne begleet, wärend d’Eltere ganz niewenbei Gebäerde léieren, déi fir den Alldag gëeegent sinn a Tipps kréien, fir se doheem z’integréieren. Et gëtt och alles wat dir wësse musst iwwer déi kognitiv an emotional Entwécklung vun de Kanner, kompakt a gutt virbereet an direkter Verbindung mat der jeeweileger Themenstonn.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Wichteg ass de Bléck op d'Kand an d‘stäerke vun der Opmierksamkeet am Familljenalldaag. Bei MiniSigns geet et explizit net em Fréifërderung. D‘Gebäerde ginn net wéi Vokabele mat de Kanner geleiert, mee vun den Elteren am Alldaag integréiert a bidden sou dem Kand eng wichteg Méiglechkeet, sech kenne matzedeelen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            D‘Selbswirksamkeet vum Kand a virun allem de Spaass stinn un éischter Stell.
                        </p>

                        <p className="text-zinc-600 text-base">Themen:</p>
                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Aféirung an d'Gebäerdesprooch</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kierper</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Spillen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Achtsamkeet am Alter</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Entwécklung vun der Sprooch</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Selbstwirksamkeet an Iessen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Dobaussen an der Natur</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Gefiller an der Autonomiephase</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Agewinnung a Friembetreiung</li>
                        </ul>

                        <h3 className="text-jul-red text-xl font-semibold">MiniSigns fir Crèche & Cycle 1</h3>
                        <p className="text-zinc-600 text-base">
                            De MiniSigns Kitacours riicht sech u Crèchen oder de Cycle 1 aus der Grondschoul (Précoce & Spillschoul). Dëst sinn 6 Themenstonnen an deenen d’Kanner zesumme mat mir verschidde Gebäerde spilleresch kenneléieren. Déi Kleng gi mat vill Spaass, Spiller, Lidder a Musek duerch d‘Stonne begleet.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Fir d‘Erzeiher, d‘Léierpersonal, an d‘Eltere gëtt et en Elterenowend mat enger Präsentatioun sou wéi Handouts.
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
        </div>
    );
};

export default minisignsCourse;
