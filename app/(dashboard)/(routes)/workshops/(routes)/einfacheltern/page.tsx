'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const einfachEltern = () => {
    const pagename = "Einfach-Eltern";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Einfach Eltern.jpg"
                            alt="Einfach Eltern"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                {/* Contenedor principal en flex */}
                <div className="page-fade-in bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">

                    {/* Textos */}
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Einfach-Eltern</h2>
                            <p className="text-jul-purple text-lg font-semibold">Online a Präsenz</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Wann dir schwanger sidd, stellt een sech et esou romantesch vir Elteren ze sinn a soubal de Puppelchen do ass, ass alles iergendwéi anescht. Dat muss awer net de Fall sinn! An dësem Workshop kucke mir wéi eng Erwaardunge mir hu wa mir Eltere ginn a wéi realistesch se sinn.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Mir kucken d‘Grondlage fir Elteren ze sinn:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat schléift hien net oder schléift hien net duerch an der Nuecht?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat kann en net eleng schlofen?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat kräischt mäi Puppelchen sou vill?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat ass et net einfach et ofzeleeën?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat gefält et him net esou gutt an der Kutsch?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat drénkt hien esou vill Mëllech an sou oft?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat wëll e kee Bräi iessen?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat kann hien sech net laang eleng beschäftegen?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Firwat huet et sou Trotzufäll?</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Ech ginn iech och Léisunge fir all dës Froen:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bezéiung a Bindung</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Virbereedung fir d‘Gebuert</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Signaler erkennen a verantwortlech reagéieren</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bindungsorientéiert Stëllen an d Fläsch ginn</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">De Puppelchen droen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">D‘Schlofsituatioun upassen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bezéiung amplaz Erzéiung</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Ënnerscheed vu Bedierfnisser a Wënsch</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Fir wien ass den Atelier geduecht?
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Fir zukünfteg Eltere wärend der Schwangerschaft</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Fir nei Eltere mat Puppelcher an hirem éischte Joer vum Liewen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Fir jiddereen deen um Thema interesséiert ass, Grousselteren a Familljememberen</li>
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

export default einfachEltern;