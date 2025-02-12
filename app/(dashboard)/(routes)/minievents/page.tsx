"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';

const MinieventsPage = () => {
    const pagename = "Mini Evenementer";
    const minievents = [
        {
            title: "MiniSigns Ouschteren/Fréijoer",
            subtitle: "Online & Präsenz",
            price: 49,
            description: "MiniSignsstonn zum Thema Ouschteren/Fréijoer mat passende Spiller, Lidder a klengen Aktivitéiten. Eng interaktiv Erfarung fir Kanner an Elteren.",
            Photo: "./mini-easter.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
        {
            title: "MiniSigns Chrëschtdag",
            subtitle: "Online & Präsenz",
            price: 59,
            description: "Festlech MiniSignsstonn mat Chrëschtdagsthema. Mat speziellen Aktivitéiten, Lidder a Spiller fir d'Chrëschtzäit ze entdecken.",
            Photo: "./mini-christmas.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
        {
            title: "MiniSigns Faarwen",
            subtitle: "Online & Präsenz",
            price: 49,
            description: "Entdeckt d'Welt vun de Faarwen duerch Spiller, Lidder a kreativ Aktivitéiten. Eng multisensoresch Erfarung fir Kleng a Grouss.",
            Photo: "./mini-colors.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
        {
            title: "Kamishibai - Mageschen",
            subtitle: "Präsenz",
            price: 30,
            description: "Mageschten Geschichtentheater mat enger hëlzener Bühn. Eng kreativ Aktivitéit fir d'Fantasie a Sproochentwécklung vun de Kanner ze fërderen.",
            Photo: "./kamishibai.jpg",
            location: "An verschidden Lokalitéiten",
            BuyingLink: "https://www.kikudoo.com/eislekerhaus",
            Descriptionlink: "",
        },
    ];

    return (
        <EvCoWogenPage
            pagename={pagename}
            courses={minievents}
        />
    );
};

export default MinieventsPage;