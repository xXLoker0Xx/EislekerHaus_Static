"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';

const CoursesPage = () => {
    const pagename = "Courses"
    const courses = [
        {
            title: "BellyBasics-Hypnobirthing",
            subtitle: "Präsenz",
            price: 50,
            description: "BellyBasics-Hypnobirthing® ass kee Gebuertfirbereedungsscours mee en Elterenfirbereedungscours a baséiert op engem bindungsorientéierte Konzept direkt vun Ufank vun der Schwangerschaft un - et gëtt keng Zäitlimitt hei.",
            Photo: "./BellyBasics-Hypnobirthing.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/bellybasics-hypnobirthing",
        },
        {
            title: "Baby Steps",
            subtitle: "Präsenz",
            price: 50,
            description: "De BabySteps® Cours riicht sech un Eltere mat hire Puppelcher am Alter vun ongeféier 1 bis 12 Méint. Et geet drëm, iech duerch dat ganzt, spannend éischt Joer ze begleeden an iech ze hëllefen ären eegene Wee als Elteren ze fannen. Wärend dem Cours ginn et vill wonnerbar Sënnes- a Spillureegungen, Schoussreider, Lidder a vill Spaass fir Grouss a Kleng.",
            Photo: "./babby-steps.png",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/babysteps",
        },
        {
            title: "Maxi Steps",
            subtitle: "Präsenz",
            price: 50,
            description: "De MaxiSteps® Bewegungs- an Erliefniscours riicht sech un Eltere mat hire klenge Kanner vun ongeféier 12 bis 36 Méint. De gréissten Deel vum MaxiSteps®-Cours besteet aus Beweegungsureegungen betreffend d'Entwécklung vum Selbstwertempfannen, Kierperbewosstsinn, Motorik, Sprooch a Beweegung. Et gëtt och Zäit fir kuerzen Austausch a Plaz fir Suerge souwéi Tipps fir den Alldag mat ären Kanner.",
            Photo: "./maxi-steps.png",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/maxisteps",
        },
        {
            title: "Geschwëstercours",
            subtitle: "Online & Präsenz",
            price: 50,
            description: "De bindungsorientéierte Geschwëstercours®️  riicht sech u Kanner am Alter tëscht 3 an 8 Joer, déi an den nächste Wochen e Geschwësterchen kréien an un hir Elteren. Duerch d'Gebuert vun engem anere Puppelchen ännert d'Struktur an der Famillnach eng Kéier an net ëmmer ass d'Ukomme vum nei gebuerene Bierger fir d' Geschwësterkanner eng Freed.",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/geschwestercours",
        },
        {
            title: "Mini Signs",
            subtitle: "Online & Präsenz",
            price: 50,
            description: "MiniSigns® ass e Cours fir Eltere mat hire Puppelcher tëscht 6 an 18 Méint. Déi Kleng gi mat vill Spaass, Spiller, Lidder a Musek duerch d‘Stonne begleet, wärend d’Eltere ganz niewenbei Gebäerde léieren, déi fir den Alldag gëeegent sinn a Tipps kréien, fir se doheem z’integréieren. Et gëtt och alles wat dir wësse musst iwwer déi kognitiv an emotional Entwécklung vun de Kanner, kompakt a gutt virbereet an direkter Verbindung mat der jeeweileger Themenstonn.",
            Photo: "./mini-signs.png",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/minisigns",
        },
        {
            title: "BabyBoogie",
            subtitle: "Präsenz",
            price: 50,
            description: "BabyBoogie ass en Danzkonzept fir Eltere mat hire Puppelcher vun 0 bis 36 Méint. Spaass steet un éischter Stell!",
            Photo: "./BabyBoogie.png",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/babyboogie",
        },
        {
            title: "Boogie Kids",
            subtitle: "Präsenz",
            price: 50,
            description: "BoogieKids riicht sech u Kanner tëscht 3 a 7 Joer ouni hir Elteren. D'Kanner entdecken d'Welt vum Danz a Musek op eng spilleresch Manéier. De Fokus ass op d'Freed vun der Beweegung, net op d'Léiere vu perfekt Danzschrëtt.",
            Photo: "./Boogie-Kids.jpg",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/boogiekids",
        },
        {
            title: "Mommy Steps",
            subtitle: "Präsenz",
            price: 0,
            description: "Fir Kierper, Geescht a Séil! Bass du am Moment schwanger? Oder hues du schonn dain Puppelchen a just déng Réckbildung ofgeschloss?  Fills du dech bereet an wëlls du dech erëm mei beweegen? Du wëlls Zäit fir dech, fir dain Kierper ze spieren ouni dir Suergen iwwer dain Puppelchen ze maache, ween sech em hie këmmert an der Zeit? Kee Problem, well MommySteps® ass dat alles!",
            Photo: "",
            location: "26 An d’Klaus, L-9956 Hachiville",
            BuyingLink: "",
            Descriptionlink: "/courses/mommysteps",
        },
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={courses} />
    );
};

export default CoursesPage;