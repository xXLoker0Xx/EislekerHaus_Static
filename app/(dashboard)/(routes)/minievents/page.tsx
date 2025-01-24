"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';

const MinieventsPage = () => {
    const pagename = "Mini Evenementer";
    const minievents = [
        {
            title: "MiniSigns Ouschteren/Fréijoer",
            subtitle: "Themestonn Fréijoer",
            price: 0,
            description: "MiniSignsstonn zum Thema Ouschteren/Fréijoer mat passende Spiller, Lidder a klengen Aktivitéiten. Eng interaktiv Erfarung fir Kanner an Elteren.",
            Photo: "./mini-easter.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/minievents/ouschteren",
        },
        {
            title: "MiniSigns Chrëschtdag",
            subtitle: "Themestonn Chrëschtdag",
            price: 0,
            description: "Festlech MiniSignsstonn mat Chrëschtdagsthema. Mat speziellen Aktivitéiten, Lidder a Spiller fir d'Weihnachtszäit ze entdecken.",
            Photo: "./mini-christmas.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/minievents/chreschtag",
        },
        {
            title: "MiniSigns Faarwen",
            subtitle: "Themestonn Faarwen",
            price: 0,
            description: "Entdeckt d'Welt vun de Faarwen duerch Spiller, Lidder a kreativ Aktivitéiten. Eng multisensoresch Erfarung fir Kleng a Grouss.",
            Photo: "./mini-colors.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/minievents/faarwen",
        },
        {
            title: "Kamishibai",
            subtitle: "Geschichtentheater",
            price: 0,
            description: "Magescht Geschichtentheater mat enger hëlzener Bühn. Eng kreativ Aktivitéit fir d'Fantasie a Sproochentwécklung vun de Kanner z'fërderen.",
            Photo: "./kamishibai.jpg",
            location: "An verschidden Lokalitéiten",
            BuyingLink: "",
            Descriptionlink: "/minievents/kamishibai",
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