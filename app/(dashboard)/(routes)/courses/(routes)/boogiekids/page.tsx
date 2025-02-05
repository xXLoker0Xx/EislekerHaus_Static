'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const boogiekids = () => {
    const pagename = 'BoogieKids';

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex flex-row w-full justify-center">
                        <Image
                            src="/Boogie-Kids.jpg"
                            alt="Boogie Kids"
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
                            <h2 className="text-jul-red text-2xl font-bold">En Danzcours fir Kanner vun 3 - 7 Joer</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            BoogieKids riicht sech u Kanner tëscht 3 a 7 Joer ouni hir Elteren. D'Kanner entdecken d'Welt vum Danz a Musek op eng spilleresch Manéier. De Fokus ass op d'Freed vun der Beweegung, net op d'Léiere vu perfekt Danzschrëtt.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Kreativitéit gëtt och gefërdert an d'Kanner kënnen hir Fantasie a Kreativitéit fräi entdecken an nei Beweegungen ausprobéieren.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Andeems Sie an engem Grupp danzen, léiere Kanner mat aneren zesummen ze schaffen, Frëndschaften anzegoen an hiert Selbstvertrauen ze erhéijen. Erfollegserliefnis duerch nei Beweegungen ze léieren an zesummen ze danze stäerken ausserdeem d'Selbstvertraue vun de Kanner.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Duerch de fréie Kontakt mat Danz a Musek ginn d’Kanner spilleresch an en aktive Liewensstil agefouert, dee Sie wärend hirem Liewe begleede kann.
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

export default boogiekids;
