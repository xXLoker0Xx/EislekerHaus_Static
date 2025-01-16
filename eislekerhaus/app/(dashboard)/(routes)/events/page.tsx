"use client";

import React from 'react';
import { EvCoWoPage } from '@/components/EvCoWogenPage';


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
        <EvCoWoPage pagename={pagename} courses={courses} />
    );
};

export default EventsPage;