'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const bellybasics = () => {
    const pagename = 'BellyBasics - Hypnobirthing';

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex w-full">
                        <Image
                            src="/bellybasics-hypnobirthing.jpg"
                            alt="BellyBasics - Hypnobirthing"
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
                            <h2 className="text-jul-red text-2xl font-bold">Elterenfirbereedungscours</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            BellyBasics-Hypnobirthing® ass kee Gebuertfirbereedungsscours mee en Elterenfirbereedungscours a baséiert op engem bindungsorientéierte Konzept direkt vun Ufank vun der Schwangerschaft un - et gëtt keng Zäitlimitt hei.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Mir beschäftegen eis hei mat follgenden Themen:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">eng selbstbestëmmte Gebuert</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Hypnose</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Entspanungs- an Entlaaschtungstechniken</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Elteren-Kand Bindung</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">den Ëmgang mam Puppelchen (Kinästhetik Infant Handling)</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">dem Drohduch wärend der Schwangerschaft</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">dem Wochenbett</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Stellen / Fläsch</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Schlof</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Droe mat engem Drohduch oder enger Droh</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Rebozo-Methoden fir Begleedung an Hëllef wärend der Gebuert</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Dir kritt Äntwerten op är Froen, souwéi Tipps an Tricks, déi dem aktuellen Zoustand vun der Entwécklung an der Gehierfuerschung entspriechen.
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

export default bellybasics;
