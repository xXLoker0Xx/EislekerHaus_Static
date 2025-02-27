'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Wonschgrousselteren = () => {
    const pagename = "Wonschgrousselteren & Wonschenkel";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>
            <CustomBackground />

            <div className="flex flex-col space-y-4 lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Wonschgrousselteren.jpg"
                            alt="Wonschgrousselteren"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Wonschgrousselteren</h2>
                            <h2 className="text-jul-red text-xl font-bold">Intergenerationelle Projekt</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            En intergenerationelle Projet. Hu dir schonn eemol eppes vun engem Wonschbopa oder enger Wonschboma heiren?
                        </p>

                        <p className="text-zinc-600 text-base">
                            Dir sidd mei wei 50 Joer al an hat nach ëmmer Freed dru mat Kanner zesummen eppes ze ënnerhuelen? Dann ass dëst genau dat richtegt fir iech. Hei waarde flott Aktivitéiten op iech, wou dir de Kanner är Talenter kennt mat op de Wee ginn an iech kennt vun hirer Freed a Liewensenergie ustieche loossen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Kommt laanscht an d‘Cabane an zesumme loosse mir nei Frëndschaften entstoe fir Grouss a Kleng.
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

                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Wonschenkel</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Dir frot iech wat ee Wonschenkel ass? Dëst ass Deel vun engem intergenerationelle Projet. Et gi Kanner gesicht déi gären zesumme mat Erwuessenen oder eelere Leit eppes ënnerhuelen an zesummen eppes erliewe wëllen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Hei waarde flott Aktivitéiten op iech an zesumme loosse mir nei Frëndschaften tëscht Grouss a Kleng entstoen.
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

export default Wonschgrousselteren;