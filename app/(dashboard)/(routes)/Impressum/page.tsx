'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';

const Datenschutz = () => {
    const pagename = "Impressum";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:px-20 mx-auto relative z-10 mt-20 lg:mt-0 text-center">

            <TitleMain title={pagename} />

                <div className="flex flex-col 2xl:flex-row gap-8 mb-8 items-center justify-center">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-zinc-700">Eisleker Haus Sàrl</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            26 an d’Klaus<br />
                            L-9956 Hachiville, Luxembourg<br />
                            +352 621 269 956<br />
                            <a href="https://www.eislekerhaus.lu" className="hover:underline" target="_blank" rel="noopener noreferrer">
                            www.eislekerhaus.lu
                            </a><br />
                            <a href="mailto:eislekerhaus@gmail.com" className="hover:underline">
                            eislekerhaus@gmail.com
                            </a><br />

                            <span className="block mt-4">
                            Niederlassungsgenehmigung: 10178380 / 0<br />
                            Umsatzsteuer-Identifikationsnummer: LU36503647
                            </span>
                        </p>
                    </div>
                </div>
            </div>


            {/* Floating elements personalizados */}
            <FloatingElements />
        </div>
    );
};

export default Datenschutz;
