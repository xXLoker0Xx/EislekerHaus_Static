"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';


const EventsPage = () => {
    const pagename = "Workshops"
    const courses = [
        {
            title: "Mëllech",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "Egal wéi dir äre Puppelche wëllt ernären, ob mat der Broscht oder der Fläsch – an dësem Workshop léiert dir alles wat dir wësse musst iwwer Stëllen a Fläsch ginn.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/mellech",
        },
        {
            title: "Beikost",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "An dësem Workshop kritt dir wëssenschaftlech baséiert an aktuell Informatiounen iwwer Beikost an zesumme wäerte mir eng stressfräi a bedierfnisorientéiert Manéier ausschaffe fir ären Start mat der Beikost.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/beikost",
        },
        {
            title: "Schlofen",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "Schlof einfach... dat kléngt ze gutt fir wouer ze sinn, oder? De Wee fir méi roueg Nuechte feiert iwwer d‘Wëssen, wéi dem Puppelche  säi Schlof funktionéiert. Ech wëll Iech hëllefen d'Schlofgewunnechte vun ärem Puppelchen ze verstoen!",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/schlofen",
        },
        {
            title: "Einfach-Eltern",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "Wann dir schwanger sidd, stellt een sech et esou romantesch vir Elteren ze sinn a soubal de Puppelchen do ass, ass alles iergendwéi anescht. Dat muss awer net de Fall sinn! An dësem Workshop kucke mir wéi eng Erwaardunge mir hu wa mir Eltere ginn a wéi realistesch se sinn.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/einfacheltern",
        },
        {
            title: "Kannergrupp",
            subtitle: "Präsenz",
            price: 30,
            description: "Passend zu de Joreszäiten, Fester, Traditiounen a villem mei,erliewe mir zesumme flott Aktivitéiten an erschafen eis gemeinsam mat vill Freed flott a positiv Momenter fir eis all.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/Kannergrupp",
        },
        {
            title: "Kreativatelier",
            subtitle: "Präsenz",
            price: "ab 35 €",
            description: "Dann kommt laanscht ! Zesumme kreéiere mir flott Dekoratioune fir doheem oder kucken saisonal wat eis kreativ géif ureegen.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/kreativatelier",
        },
        {
            title: "Grousselteren-Treff",
            subtitle: "Präsenz",
            price: 30,
            description: "Dir sidd Boma oder Bopa mat Häerz a Séil a versuergt är Enkelkanner mat voller Freed ?  Des Zeit ass eng ganz besonnesch Zeit an et kennt een an en anere Genoss wei mat den eege Kanner.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/grousselteren",
        },
        {
            title: "Wonschgrousselteren",
            subtitle: "Präsenz",
            price: 30,
            description: "Hu dir schonn eemol eppes vun engem Wonschbopa oder enger Wonschboma heiren ? Dëst ass guer keng Zauberei. Dir sidd mei wei 50 Joer al an hat nach ëmmer Freed dru mat Kanner zesummen eppes ze ënnerhuelen ? Dann ass dëst genau dat richtegt fir iech.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "/workshops/wonschgrousselteren",
        },
        {
            title: "Auszäitmoment",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Denk och un dech selwer a gënn dir e bëssi Zeit fir dech. Zesumme kucke mir wat dir gutt deet a woumadden‘s du dir eng Freed kanns maachen an nei Energie tanken kanns.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/workshops/auszaitmoment",
        },
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={courses} />
    );
};

export default EventsPage;