"use client";

import React from "react";


import FloatingElements from "@/components/FloatingElements";
import CustomBackground from "@/components/CustomBack";
import { TitleMain } from "@/components/TitleMain";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// PAGE CODE
const HomePage: React.FC = () => {

    return (
        <div className="bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={"Welcome Home"} />
            </div>

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-10 lg:mt-0 space-y-8">
                {/* Project Description */}
                <div className="p-4 flex flex-col mb-4">
                    {/* Texto */}
                    <div className="space-y-2">
                        <p className="text-zinc-600 text-base text-center">
                            Eisleker Haus ass méi wéi just en Zentrum – et ass eng Plaz vum Häerz, wou d'Liewe gefeiert gëtt. Hei steet d'Famill am Mëttelpunkt, an all Generatioun gëtt begréisst, vu Puppelcher bis Grousselteren.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center">
                    <Image
                        src="/Cabane 1.jpg"
                        alt="house"
                        width={500}
                        height={500}
                        className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                    />
                </div>
                <div className="bg-jul-white p-4 rounded-lg shadow-md flex flex-col  gap-6 mb-4">
                    {/* Texto */}
                    <div className="space-y-2">
                        <p className="text-zinc-600 text-base text-center">
                            Mir gleewen un d'Kraaft vun der Bindung an déi gemeinsam Momenter, déi d'Séil beräicheren. An enger häerzlecher an hämmlecher Atmosphär begleede mir iech duerch d'Reesen vum Elterendasein, vun der Schwangerschaft un bis bei déi éischt Schrëtt vum Kand.
                        </p>
                        <p className="text-zinc-600 text-base text-center">
                            Mat Workshops, Aktivitéiten an individuell ugepasste Berodungen schafe mir e Raum, wou Freed, Léift an Zesummenhalt floréieren. Mir encouragéieren Kanner hir Fantasie ze entdecken, Elteren nei Kraaft ze tanken an Grousselteren déi besonnesch Roll an der Famill ze genéissen.
                        </p>
                        <p className="text-zinc-600 text-base text-center">
                            Am Eisleker Haus gëtt all Stonn e Moment vu Wäert. Mir freeën eis drop, mat iech zesummen ewech vum Alldag schéi Momenter ze schafen, wou jiddereen sech entfale kann – Grouss wéi Kleng.
                        </p>
                    </div>
                    {/* Textos visibles solo en lg */}
                    <div className="align-middle justify-between hidden xl:flex xl:flex-col">
                    </div>
                </div>

                <div className="flex flex-row w-full justify-center 2xl:justify-between flex-wrap px-4">
                    <Image
                        src="/Cabane 2.jpg"
                        alt="house"
                        width={500}
                        height={500}
                        className="flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                    />
                    <Image
                        src="/Cabane 3.jpg"
                        alt="house"
                        width={500}
                        height={500}
                        className="hidden 2xl:flex rounded-lg shadow-md max-h-[480px] w-max object-contain"
                    />
                </div>

                {/* About Julie */}
                <section className="bg-jul-white p-4 rounded-lg shadow-md space-y-2 flex flex-col h-full justify-between items-center">
                    <h2 className="text-jul-red text-2xl font-bold text-center">
                        Iwwert Julie
                    </h2>
                    <p className="text-zinc-600 text-base text-center">
                        Julie ass Mamm vun zwee Kanner an huet vill Joren Erfarung als Educatrice. Si leet groussen Wäert op Familljebindung,
                        perséinlech Entwécklung a Freed um Liewen. Mat Léift a Passioun huet si Eisleker Haus geschaf, en häerzleche Raum fir grouss a kleng.
                    </p>
                    <Button
                        className="bg-jul-red text-white hover:bg-jul-red/90"
                        onClick={() => (window.location.href = '/julieoswald')}
                    >
                        Méi Info
                    </Button>
                </section>

                {/* Call to Action */}
                <section className="bg-jul-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-jul-red text-2xl font-bold">Entdeckt eis Offeren</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className="bg-jul-white border-2 border-jul-green p-4 rounded-lg text-black text-center flex flex-col h-full justify-between items-center">
                            <h3 className="text-xl font-bold text-jul-green">Coursen</h3>
                            <p>Flott Aktivitéiten fir Elteren a Kanner vun all Alter.</p>
                            <Button
                                className="mt-4 bg-jul-green text-white px-4 py-2 rounded-lg hover:bg-jul-red"
                                onClick={() => (window.location.href = '/courses')}
                            >
                                Weider liesen
                            </Button>
                        </div>
                        <div className="bg-jul-white border-2 border-jul-purple p-4 rounded-lg text-black text-center flex flex-col h-full justify-between items-center">
                            <h3 className="text-xl font-bold text-jul-purple">Workshops</h3>
                            <p>Kreativ Atelier’en an thematesch Stonnen fir Grouss a Kleng.</p>
                            <Button
                                className="mt-4 bg-jul-purple text-white px-4 py-2 rounded-lg hover:bg-jul-red"
                                onClick={() => (window.location.href = '/workshops')}
                            >
                                Weider liesen
                            </Button>
                        </div>
                        <div className="bg-jul-white border-2 border-jul-yellow p-4 rounded-lg text-black text-center flex flex-col h-full justify-between items-center">
                            <h3 className="text-xl font-bold text-jul-yellow">Evenementer</h3>
                            <p>Saisonal Evenementer fir Frënn a Famill.</p>
                            <Button
                                className="mt-4 bg-jul-yellow text-white px-4 py-2 rounded-lg hover:bg-jul-red"
                                onClick={() => (window.location.href = '/events')}
                            >
                                Weider liesen
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
};

export default HomePage; // Ensure this line is present at the end of your file
