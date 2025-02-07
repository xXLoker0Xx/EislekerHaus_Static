'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const schlofen = () => {
    const pagename = "Schlofen";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className=" flex flex-col align-middle xl:flex-row gap-6 mb-4">
                    <div className="page-fade-in flex flex-row w-full justify-center">
                        <Image
                            src="/works-Schlofen.jpg"
                            alt="works Schlofen"
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
                            <h2 className="text-jul-red text-2xl font-bold">Schlofen</h2>
                            <p className="text-jul-purple text-lg font-semibold">Online a Präsenz</p>
                        </div>

                        <p className="text-zinc-600 text-base">
                            Schlof einfach... dat kléngt ze gutt fir wouer ze sinn, oder? De Wee fir méi roueg Nuechte feiert iwwer d‘Wëssen, wéi dem Puppelche säi Schlof funktionéiert. Ech wëll Iech hëllefen d'Schlofgewunnechte vun ärem Puppelchen ze verstoen!
                        </p>

                        <p className="text-zinc-600 text-base">
                            Et gi vill Mythe ronderëm de Babyschlof an dir hutt warscheinlech deen een oder aner Saz och schonn héieren:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Looss hie net just un der Broscht aschlofen, hie muss léieren eleng ze schlofen!"</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Gitt e bësse Pre-Mëllech an et schléift besser!"</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Familljebett, also jiddereen an engem Bett??? Dëst ass vill ze geféierlech! hie muss a sengem eegene Bett a sengem eegenen Zëmmer schlofen, soss kritt dir hien ni méi eraus!"</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Leet et einfach of, et schléift iergendwann!"</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Mësch de Bräi wierklech déck un, am léifste mat Schmelzflocken, da schléift en duerch!"</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Vun 6 Méint u brauchen se an der Nuecht keng Mëllech méi, gitt hinnen einfach Waasser!"</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">"Et ass är eege Schold wann d'Nuechte sou ustrengend fir iech sinn, Dir sprangt ëmmer! Loosst et kräischen!"</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Wow, et ass kee Wonner, datt dir no esou Aussoen net sécher sidd, ob de Schlof vun ärem Puppelchen esou normal ass wéi et ass, an datt dir vläicht och d'Gefill hutt, datt dir eppes maache musst fir d'Situatioun ze änneren. Awer ass dat wierklech de Fall? An dësem Workshop iwwert de Babyschlof wëll ech emol méi genee mat iech zesumme kucken, wat genau dat alles heescht, well Puppelcher schlofen anescht wéi Erwuessener. Duerno gëtt den Drock deen dir Iech eventuell opgebaut hutt entlooss an dir sidd gestäerkt, well dir wësst firwat äre Puppelchen sou dacks erwächt, wat är Nuechte méi einfach maache kann, a firwat Schlofléierprogrammer keng Léisung sinn. Wann dir gefrot gitt "Schléift hien d'Nuecht nach net duerch?", äntwert dir zouversiichtlech "Nee, natierlech net!" D'Schlofverhalen vun ärem Puppelchen huet en Zweck.
                        </p>

                        <p className="text-zinc-600 text-base">
                            Am Babyschlofworkshop léiert dir:
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">wéi Schlof funktionéiert</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">wéi e séchert Schlofëmfeld fir äre Puppelchen ausgesäit</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">wat „d'Nuecht duerchschlofen" eigentlech heescht a wéini kënnt dir dat vun ärem Puppelchen erwaarden</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">firwat Puppelcher anescht schlofe wéi Erwuessener</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">Wat ass mat ärem Puppelchen datt en sou dacks erwächt?</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">ob Mëllech an der Nuecht Sënn mécht oder net</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">wat fir spannend Saachen d‘Natur sech iwwerluet huet fir iech d‘ Nuechten mei einfach ze maachen</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">firwat Schlofléierprogrammer iech oder ärem Puppelchen net hëllefen</li>
                        </ul>

                        <p className="text-zinc-600 text-base">
                            Fir wien ass dëse Workshop geduecht?
                        </p>

                        <ul className="text-zinc-600 text-base list-none pl-5">
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">fir zukünfteg Eltere wärend der Schwangerschaft</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">fir nei Eltere mat Puppelcher an hirem éischte Liewensjoer</li>
                            <li className="relative before:content-['✦'] before:text-jul-green before:absolute before:-left-5">fir jiddereen deen um Thema interesséiert ass, Grousselteren a Familljememberen</li>
                        </ul>

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
        </div >
    );
};

export default schlofen;