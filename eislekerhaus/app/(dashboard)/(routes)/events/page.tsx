"use client";

import React from 'react';
import { EvCoWogenPage } from '@/components/EvCoWogenPage';


const EventsPage = () => {
    const pagename = "Events"
    const courses = [
        {
            title: "",
            subtitle: "",
            SectionType: "",
            price: 0,
            description: "",
            Photo: undefined,
            location: "",
            BuyingLink: "",
            Descriptionlink: "",
        }
    ];

    return (
        <EvCoWogenPage pagename={pagename} courses={courses} />
    );
};

export default EventsPage;