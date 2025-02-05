'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const babysteps = () => {
    const pagename = "Baby Steps";

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex flex-row w-full justify-center">
                        <Image
                            src="/babby-steps.png"
                            alt="babby Steps"
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
                            <h2 className="text-jul-red text-2xl font-bold">De Cours vun 1 bis 12 Méint</h2>
                            {/* <p className="text-jul-purple text-lg font-semibold">ERLIEFT MUSIK ZESUMMEN!</p> */}
                        </div>

                        <p className="text-zinc-600 text-base">
                            De BabySteps® Cours riicht sech un Eltere mat hire Puppelcher am Alter vun ongeféier 1 bis 12 Méint. Et geet drëm, iech duerch dat ganzt, spannend éischt Joer ze begleeden an iech ze hëllefen ären eegene Wee als Elteren ze fannen. Wärend dem Cours ginn et vill wonnerbar Sënnes- a Spillureegungen, Schoussreider, Lidder a vill Spaass fir Grouss a Kleng.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Den Austausch fënnt an themenbaséierten Stonne statt a bitt iech vill Raum fir är Suergen a Froen, sou wéi Tipps fir den Alldag mam Puppelchen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Mir beschäftegen eis mat follgenden Themen:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bindung stäerken</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Entwécklung am éischte Liewensjoer</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Signaler beim Bëbee erkennen a Bedierfnisser stellen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kommunikatioun</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Suckel</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Stellen a Fläsch</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Droen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Schlofen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Beikost</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kinästhetik Infant Handling</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Elementer aus der Bëbeesmassage</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Ritualer</li>
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

export default babysteps;
