'use client';

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BebeesmassageCourse = () => {
    const pagename = 'Bëbeesmassage';

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/Bebesmassage.jpg"  // Update with appropriate image
                            alt="Bëbeesmassage"
                            width={500}
                            height={500}
                            className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                        />
                    </div>
                </div>

                {/* Main container */}
                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col xl:flex-row gap-6">
                    {/* Texts */}
                    <div className="flex-grow space-y-4">
                        <div className="flex-grow space-y-4">
                            <h2 className="text-jul-red text-2xl font-bold">Balsam fir d'Séil!</h2>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Eng Bëbeesmassage ass Balsam fir d'Séil. Net just fir däi Kand mee och fir dech! Loosst iech ofhuelen aus ärem Alldag a schaaft gemeinsam e ganz intensive Moment zesummen a stäerkt soumat och är Elteren-Kand-Bindung zueneen.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Tankt zesumme Kraaft a schaaft e Moment vun intensiver Rou just fir iech. Duerch déi verschidde Massagetechniken gëtt och déi kierperlech a séilesch Entwécklung vum Kand gefuerdert an de gezielte Kierperkontakt duerch är zäertlech Beréierungen ass och eng Form vun nonverbaler Kommunikatioun tëscht iech an ärem Kand.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Et hëlleft Stresshormoner ofzebauen, stäerkt d'Immunsystem an et kënne verschidde Beschwerden vum Kand, wéi zum Beispill Blähungen, allgemeng Onrou, asw duerch déi verschidde Massagetechniken gemindert gi.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Du bass interesséiert un engem klenge gemittleche Kader gemeinsam mat dengem Bëbee e puer flott an intensiv Momenter ze erliewen? Dann wier eng Bëbeesmassage bei mir genau dat Richtegt.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Mir gesinn eis 2x 1,5h-2h, sou hu mir genuch Zeit fir e gemeinsamen Austausch, fir Unzekommen, d'Massage ze genéissen an e kléngen Ofschloss ze maachen. De Cours riicht sech u Bëbee'en tëscht 6 Wochen a 6 Méint.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Du léiers déi verschidde Grëffer aus der klassescher Massagetechnik nom Frédérick Leboyer kënnen, sou dass du dës och Doheem uwende kanns. Do weg gemittlech Kleeder un a bréng en Duch an eppes fir ze drénke mat! De Massagenueleg kriss du vu mir.
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

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
};

export default BebeesmassageCourse;