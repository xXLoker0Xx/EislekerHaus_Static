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
            description: "Egal wéi dir äre Puppelche wëllt ernären, ob mat der Broscht oder der Fläsch – an dësem Workshop léiert dir alles wat dir wësse musst iwwer Stellen a Fläsch ginn.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: " ",
            Descriptionlink: "/workshops/mellech",
        },
        {
            title: "Beikost",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "An dësem Workshop kritt dir wëssenschaftlech baséiert an aktuell Informatiounen iwwer Beikost an zesumme wäerte mir eng stressfräi a bedierfnisorientéiert Manéier ausschaffe fir ären Start mat der Beikost.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: " ",
            Descriptionlink: "/workshops/beikost",
        },
        {
            title: "Schlofen",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "Schlof einfach... dat kléngt ze gutt fir wouer ze sinn, oder? De Wee fir méi roueg Nuechte feiert iwwer d‘Wëssen, wéi dem Puppelche  säi Schlof funktionéiert. Ech wëll Iech hëllefen d'Schlofgewunnechte vun ärem Puppelchen ze verstoen!",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: " ",
            Descriptionlink: "/workshops/schlofen",
        },
        {
            title: "Einfach-Eltern",
            subtitle: "Online a Präsenz",
            price: 49,
            description: "Wann dir schwanger sidd, stellt een sech et esou romantesch vir Elteren ze sinn a soubal de Puppelchen do ass, ass alles iergendwéi anescht. Dat muss awer net de Fall sinn! An dësem Workshop kucke mir wéi eng Erwaardunge mir hu wa mir Eltere ginn a wéi realistesch se sinn.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: " ",
            Descriptionlink: "/workshops/einfacheltern",
        },
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={courses} />
    );
};

export default EventsPage;