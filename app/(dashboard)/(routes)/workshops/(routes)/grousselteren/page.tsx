'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const GrousselterenTreff = () => {
    const pagename = "Grousselteren-Treff";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Grousselterentreff 1.jpg"
                            alt="Grousselteren-Treff"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Grousselterentreff</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Dir sidd Boma oder Bopa mat Häerz a Séil a versuergt är Enkelkanner mat voller Freed? Des Zeit ass eng ganz besonnesch Zeit an et kennt een an en anere Genoss wei mat den eege Kanner.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Dir géift iech trotzdeem freeën iwwert e bëssi Ofwiesslung a flott Begéinunge mat anere Grousselteren? Dann kommt gäre laanscht a genéisst déi eng oder aner flott Stonn bei eis an der Cabane.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Hei waarde flott Kreativatelier‘en, Geschichtenabenteuer, Musik, Entspaanungsübungen a villes mei.
                        </p>

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

            <FloatingElements />
        </div>
    );
};

export default GrousselterenTreff;