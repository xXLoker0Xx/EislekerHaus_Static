'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const maxistepsCourse = () => {
    const pagename = 'MaxiSteps';

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex w-full">
                        <Image
                            src="/maxi-steps.png"
                            alt="MaxiSteps"
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
                            <h2 className="text-jul-red text-2xl font-bold">De MaxiSteps® Bewegungs- an Erliefniscours</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            De MaxiSteps® Bewegungs- an Erliefniscours riicht sech un Eltere mat hire klenge Kanner vun ongeféier 12 bis 36 Méint. De gréissten Deel vum MaxiSteps®-Cours besteet aus Beweegungsureegungen betreffend d'Entwécklung vum Selbstwertempfannen, Kierperbewosstsinn, Motorik, Sprooch a Beweegung. Et gëtt och Zäit fir kuerzen Austausch a Plaz fir Suerge souwéi Tipps fir den Alldag mat ären Kanner.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Wärend de Stonne gräifen mir och verschidden Themen op wéi zum Beispill:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bezéiung anstatt Erzéiung</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Eltere sinn, Koppel bleiwen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Autonomiephase</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">„Mamma“ Burnout</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Schlof</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Familljendesch, Picky Eater, Mëllech</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Trotz, Frust, Roserei</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Grenzen, Reegelen, „Nee“</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Strofen, Konsequenzen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Léien, Deelen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Gewaltfräi Kommunikatioun</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Agewinnung Crèche, Friembetreiung</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kierperfleeg, Weckelen, Zänn wäschen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kognitiv Entwécklung vum Kand</li>
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
        </div>
    );
};

export default maxistepsCourse;
