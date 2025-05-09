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
            BuyingLink: "/contact",
            Descriptionlink: "",
        },
        {
            title: "Wëllkommensfeier",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Perséinlech Zeremonie fir de Puppelchen ze begréissen. Mat Famill a Frënn eemoleg Momenter schafen an d'Liewe vum Neigebuerene feieren.",
            Photo: "./welcome-ceremony.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "/contact",
            Descriptionlink: "",
        },
        {
            title: "Babyshower",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Festlech Feier fir d'Schwangerschaft an de Puppelchen ze éieren. Mat Spiller, Kuch a guddem Humor - eng Kéier 'Queen for a Day' sinn!",
            Photo: "./babyshower.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "/contact",
            Descriptionlink: "",
        },
        {
            title: "Kannergebuertsdag",
            subtitle: "Präsenz",
            price: "Op Ufro",
            description: "Loosst eis zesumme feieren. Dir wëllt gären e puer flott Stonne verbrénge fir ärem Kant säi Gebuertsdag an wësst net wou? Dann sidd dir hei genau richteg. Hei am Eisleker Haus waarde vill flott Angeboter op iech . Mellt iech a mir kucken zesumme wat fir iech dat Passend wier.",
            Photo: "./future-events.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "/contact",
            Descriptionlink: "",
        },
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={events} />
    );
};

export default EventsPage;