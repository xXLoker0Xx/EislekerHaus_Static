'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const mommyStepsCourse = () => {
    const pagename = 'MommySteps';

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="flex flex-row w-full justify-center">
                        <Image
                            src="/BellyBasics 1.jpg"
                            alt="Mommy Steps"
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
                            <h2 className="text-jul-red text-2xl font-bold">Fir Kierper, Geescht a Séil!</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Bass du am Moment schwanger? Oder hues du schonn dain Puppelchen a just déng Réckbildung ofgeschloss? Fills du dech bereet an wëlls du dech erëm méi beweegen? Du wëlls Zäit fir dech, fir dain Kierper ze spieren ouni dir Suergen iwwer dain Puppelchen ze maache, ween sech em hie këmmert an der Zeit? Kee Problem, well MommySteps® ass dat alles!
                        </p>

                        <p className="text-zinc-600 text-base">
                            Danzen - dat wësse mer haut - huet e ganz positiven Effekt op Kierper, Geescht a Séil! Eise Kierper gëtt méi flexibel, d'Muskelen, d'Seenen, d'Bänner, d'Koordinatioun an d'Häerz-Kreeslaf-System gi gestäerkt. Musek a Rhythmen si bewisen datt se gutt fir d'Séil sinn a wa mir Gléckshormone fräiginn, ginn d'Stresshormone vum alldeegleche Liewen automatesch reduzéiert.
                        </p>

                        <p className="text-zinc-600 text-base">
                            A wärend der Schwangerschaft profitéiert de Kierper och vun den Danzbeweegungen, déi och eng wonnerbar Virbereedung op d'Gebuert sinn.
                        </p>

                        <p className="text-zinc-600 text-base">
                            De Puppelche verbréngt d'Coursstonn an der Droh an ass mat dobäi - awer d'Erfarung weist datt hien se meeschtens verschléift. Wärend de Puppelchen de Kierperkontakt an d'Beweegunge vun der Mamm genéisst, huet si di neidesch Rou fir sech op den Training ze konzentréieren.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Duerch d'Drohschoul Hamburg® geschoult, kann ech iech iwwer korrekt Droen a wichtege Know-how iwwer déi meescht üblech Drohhëllefen oder Dicher bidden, fir dass dir ären Training ganzheetlech genéisse kennt.
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

export default mommyStepsCourse;
