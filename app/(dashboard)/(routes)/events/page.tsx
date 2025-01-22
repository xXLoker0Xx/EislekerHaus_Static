"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';

const EventsPage = () => {
    const pagename = "Evenementer";
    const events = [
        {
            title: "Blessing’way",
            subtitle: "Zeremonie",
            price: 0,
            description: "Eng wonnerbar Zeremonie fir d'Mamm ze feieren. Perséinlech Ritualer fir d'Schwangerschaft ze éieren an d'Mamm ze stäerken. Eege Moment mat Léifsten fir onvergiesslech Erënnerungen.",
            Photo: "./blessing-way.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/events/blessing-way",
        },
        {
            title: "Wëllkommensfeier",
            subtitle: "Begréissungsfeier",
            price: 0,
            description: "Perséinlech Zeremonie fir de Puppelchen ze begréissen. Mat Famill a Frënn eemoleg Momenter schafen an d'Liewe vum Neigebuerene feieren.",
            Photo: "./welcome-ceremony.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/events/welcome-ceremony",
        },
        {
            title: "Babyshower",
            subtitle: "Celebración prenatal",
            price: 0,
            description: "Festlech Feier fir d'Schwangerschaft an de Puppelchen ze éieren. Mat Spiller, Kuch a guddem Humor - eng Kéier 'Queen for a Day' sinn!",
            Photo: "./babyshower.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/events/babyshower",
        },
        {
            title: "Zukünfteg Ideen",
            subtitle: "Komend Eventen",
            price: 0,
            description: `Pläng fir Zukunft: Yogaevent, Broschtkriibsevent (Octobre rose), Bondingmassage, Spill & Spaass am Duerf, Velo fir den gudden Zweck`,
            Photo: "./future-events.jpg",
            location: "An verschidden Lokalitéiten",
            BuyingLink: "",
            Descriptionlink: "/events/future-ideas",
        },
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={events} />
    );
};

export default EventsPage;