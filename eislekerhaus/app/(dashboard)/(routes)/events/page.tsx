"use client";

import React from 'react';
import { EvCoPage } from '@/components/EvCoPage';

const EventsPage = () => {
    const pagename = "Events"
    const sectionName = "Upcoming Events"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default EventsPage;