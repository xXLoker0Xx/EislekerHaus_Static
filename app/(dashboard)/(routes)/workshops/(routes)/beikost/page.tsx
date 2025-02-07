'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const beikost = () => {
    const pagename = "Beikost";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Beikost.jpg"
                            alt="Beikost"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                {/* Contenedor principal en flex */}
                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">

                    {/* Textos */}
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Beikost</h2>
                            <p className="text-jul-purple text-lg font-semibold">Online a Präsenz</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Dëse Workshop riicht sech un:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Elteren, déi gäre méi Informatioune wärend der Schwangerschaft iwwert Beikost gewuer ginn.</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Elteren, déi nach amgaang si Beikost anzeféieren.</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Eltere mat hire Puppelcher am éischte Joer vum Liewen, déi schonn ugefaang hu mat der Beikost.</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">All Familljememberen déi um Thema Beikost interesséiert sinn.</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Et gi firgefertegt Pläng, verschidde Recommandatioune vu Spezialisten, eng Onmass Bicher a Rezeptblogs, asw iwwer Beikost a Bräi fir Puppelcher.
                        </p>

                        <p className="text-zinc-600 text-base">
                            An dësem Workshop kritt dir wëssenschaftlech baséiert an aktuell Informatiounen iwwer Beikost an zesumme wäerte mir eng stressfräi a bedierfnisorientéiert Manéier ausschaffe fir ären Start mat der Beikost.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Kaum eppes stresst eis Eltere méi wéi d'Thema "Iessen" mat eise Kanner. Mee et ass genee um Ufank, wou mir Elteren Äntwerten op eis Froe fanne wëllen. "Wéi a wéini fänken ech u mengem Puppelche fest Narung ze ginn?" „ Wat dierf mäi Kand iessen a wat net?“ „ Wat ass wa mäi Kand neicht iesse well?“ „Muss ech ofstellen?“….
                        </p>

                        <p className="text-zinc-600 text-base">
                            Follgend Theme gi beschwat:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéini fänke mir mat Beikost un?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Beikostreifezeechen - wéieng sinn et a firwat si se wichteg?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi eng Beikostfuerpläng verfollege mir? Verfollege mir der iwwerhaapt?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi a mat wat fänke mir un?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi eng Liewensmëttel si gëeegent a wéi eng sinn net gëeegent?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bräi a BLW (Baby Led Weaning) - wat sinn d'Ënnerscheeder?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi suerge mir fir d'Eisenversuergung vun eisem Puppelchen?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Mammemëllech, Formula-Mëllech - heescht d'Aféierung vun der Beikost automatesch d‘Enn vun der Mëllech oder d'Ofstellen? A wat drénkt et dann?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Mäi Puppelche wëll net iessen, wat elo?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Sécherheet an Éischt Hëllef an Iesssituatiounen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Alldeeglech Tipps</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Ausbléck op d'Crèchenzeit / Friembetreiung</li>
                        </ul>

                        <div>
                            <Button
                                className="bg-jul-red text-white hover:bg-jul-red/90"
                                onClick={() => window.open("https://www.kikudoo.com/eislekerhaus", '_blank')}
                            >
                                Mell dech un!
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

export default beikost;