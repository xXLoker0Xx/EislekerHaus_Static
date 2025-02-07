"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';

const EventsPage = () => {
    const pagename = "Evenementer";
    const events = [
        {
            title: "Blessing’way",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Eng wonnerbar Zeremonie fir d'Mamm ze feieren. Perséinlech Ritualer fir d'Schwangerschaft ze éieren an d'Mamm ze stäerken. Eege Moment mat Léifsten fir onvergiesslech Erënnerungen.",
            Photo: "./blessing-way.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
        {
            title: "Wëllkommensfeier",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Perséinlech Zeremonie fir de Puppelchen ze begréissen. Mat Famill a Frënn eemoleg Momenter schafen an d'Liewe vum Neigebuerene feieren.",
            Photo: "./welcome-ceremony.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
        {
            title: "Babyshower",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Festlech Feier fir d'Schwangerschaft an de Puppelchen ze éieren. Mat Spiller, Kuch a guddem Humor - eng Kéier 'Queen for a Day' sinn!",
            Photo: "./babyshower.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
        /* {
            title: "Zukünfteg Ideen",
            subtitle: "Komend Eventen",
            price: 0,
            description: `Pläng fir Zukunft: Yogaevent, Broschtkriibsevent (Octobre rose), Bondingmassage, Spill & Spaass am Duerf, Velo fir den gudden Zweck`,
            Photo: "./future-events.jpg",
            location: "An verschidden Lokalitéiten",
            BuyingLink: "",
            Descriptionlink: "/events/future-ideas",
        }, */
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={events} />
    );
};

export default EventsPage;