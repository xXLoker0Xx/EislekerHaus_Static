'use client'

import React from 'react';
import { EvCoPage } from '@/components/EvCoPage';

const ParentsKidsPage = () => {
    const pagename = "Parents & Kids"
    const sectionName = "Courses"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default ParentsKidsPage;