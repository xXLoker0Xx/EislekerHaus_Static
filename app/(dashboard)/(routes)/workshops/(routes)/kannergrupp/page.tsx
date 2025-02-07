'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Kannergrupp = () => {
    const pagename = "Kannergrupp";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Kannertreff 1.jpg"
                            alt="Kannergrupp"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                <div className="page-fade-in bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Zesummen Erliewen</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Passend zu de Joreszäiten, Fester, Traditiounen a villem mei, erliewe mir zesumme flott Aktivitéiten an erschafen eis gemeinsam mat vill Freed flott a positiv Momenter fir eis all.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Mir treffen eis all 2 Wochen
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

export default Kannergrupp;