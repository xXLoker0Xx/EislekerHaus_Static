'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Auszaitmoment = () => {
    const pagename = "Auszäitmoment";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Auszaitmoment.jpg"
                            alt="Auszäitmoment"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Zeit fir dech</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Denk och un dech selwer a gënn dir e bëssi Zeit fir dech. Zesumme kucke mir wat dir gutt deet a woumadden's du dir eng Freed kanns maachen an nei Energie tanken kanns.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Mir wäerten e klengt Virgespréich hunn, da kanns du däi ganz individuelle Moment genéissen a wäerten dann nach e klengen Ofschloss maachen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Do weg gemittlech Kleeder un a bréng eppes ze drénke mat!
                        </p>

                        <p className="text-zinc-600 text-base">
                            Virgesi sinn <strong>1,5h bis 2h</strong>, gäre kenne mir dëst awer un deng Bedierfnisser upassen.
                        </p>

                        <div className="space-y-2">
                            <h3 className="text-jul-red text-xl font-semibold">Méiglechkeeten:</h3>
                            <p className="text-zinc-600 text-base">
                                Beispiller: Entspaanungsübungen, Achtsamkeet, Klangbad, Klangrees, Kraaftdéier, an villes méi…
                            </p>
                        </div>

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

export default Auszaitmoment;