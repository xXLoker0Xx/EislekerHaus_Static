'use client'

import React from 'react';
import { EvCoPage } from '@/components/EvCoPage';

const GrandParentsPage = () => {
    const pagename = "Grand Parents"
    const sectionName = "Courses"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default GrandParentsPage;