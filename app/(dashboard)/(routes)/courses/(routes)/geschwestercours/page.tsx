'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const geschwesterCourse = () => {
    const pagename = 'Geschwëster';

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Geschwestercours.jpg"
                            alt="Geschwestercours"
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
                            <h2 className="text-jul-red text-2xl font-bold">Alter tëscht 3 an 8 Joer</h2>
                            <p className="text-jul-purple text-lg font-semibold">Online & Präsenz</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            De bindungsorientéierte Geschwëstercours riicht sech u Kanner am Alter tëscht 3 an 8 Joer, déi an den nächste Wochen e Geschwësterchen kréien an un hir Elteren. Duerch d'Gebuert vun engem anere Puppelchen ännert d'Struktur an der Famill nach eng Kéier an net ëmmer ass d'Ukomme vum nei gebuerene Bierger fir d'Geschwësterkanner eng Freed.
                        </p>

                        <p className="text-zinc-600 text-base">
                            De Geschwëstercours vun Einfach Eltern soll hëllefen, op eng léif an informéiert Manéier mat Hëllef vun den neisten Erkenntnisser aus der Entwécklung a Gehierfuerschung, duerch den turbulenten Alldag ze begleeden.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Dése Cours besteet aus enger Stonn mat den Elteren a mam Kand, een Elterenowend ouni Kand an no der Gebuert eng Stonn alleguer zesummen.
                        </p>

                        <p className="text-zinc-600 text-base">Themen vun der éischter Stonn mat Kand:</p>
                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Kanner leieren eng Stoffwëndel maachen a wisou sie dono beim Puppelchen zwar kennen hëllefen awer net eleng wéckelen.</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Anhand vu Biller kréien sie erkläert wat de Puppelchen am Bauch an no der Gebuert schonn alles kann a wat net.</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">An zum Schluss kréien sie nach e flotte Geschwësterdiplom a kennen zesummen eng kleng Iwwerraschung fir de Puppelche gestalten.</li>
                        </ul>

                        <p className="text-zinc-600 text-base">Themen um Elterenowend:</p>
                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi Bindung entsteet</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Bindung innerhalb vun der Famill stäerken</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">De Band tëscht de Geschwëster stäerken</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Virbereedung op eventuell Schwieregkeeten</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Exklusivzeit fir jiddereen a wéi déi kennen ausgesinn</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Ab wéini kennen Kanner iwwerhaapt Verständnis opbréngen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wéi schlofe mir ab elo all</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Tipps an Tricks ronderëm d'Mëllech-an d'Wéckelzait</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Geschwësterskills</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">A villes méi…</li>
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
        </div>
    );
};

export default geschwesterCourse;
