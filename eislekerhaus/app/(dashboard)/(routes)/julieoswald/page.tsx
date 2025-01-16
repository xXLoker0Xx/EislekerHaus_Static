// app/(dashboard)/(routes)/julieoswald/page.tsx

'use client'; // Ensure you're using 'use client' at the top of the file for client components

import CustomBackground from '@/components/CustomBack';
import { TitleMain } from '@/components/TitleMain';
import Image from 'next/image';

const WhoIsJuliePage: React.FC = () => {

    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            <CustomBackground />
            <div className="lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={"Hola"} />
                <div className="mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                    <Image
                        src={"/Main_Julie.jpg"}
                        alt={"Image for Julie"}
                        className="rounded-full w-48 h-48 mx-auto mb-6 border-4 border-jul-green"
                        width={192}
                        height={192}
                    />
                    <div>
                        <p className="text-lg text-gray-700 mb-4">
                            Mäin Numm ass Julie an ech si Mamm vun zwee wonnerbare Kanner.
                            Mäin wandelbare Beruff als Educatrice huet mech mat villen Joren Erfarung a villen Weiderbildungen endlech zu mengem eegene klengen Dram gefouert.
                            An engem ganz klengen a gemittleche Kader bidden ech iech flott Aktivitéiten a Workshops u ronderëm d'Schwangerschaft, d'Familljeliewen, d’Klengkandentwécklung, souwéi och individuell Seancë fir äert d’Wuelbefannen .
                            Ech bidden iech e Raum fir är Wënsch, Iddien an awer och är Suergen a Froen.
                            An menger Cabane soll jiddereen sech wuelfillen an sech frei entfale kennen, Grouss wéi Kleng.
                            Ech freeë mech op vill flott Momenter mat iech all!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoIsJuliePage;
