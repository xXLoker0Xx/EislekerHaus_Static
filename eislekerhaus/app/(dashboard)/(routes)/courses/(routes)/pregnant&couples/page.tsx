'use client'

import React from 'react';

import { EvCoPage } from '@/components/EvCoPage';

const PregnantCouplesPage = () => {
    const pagename = "Pregnant & Couples";
    const sectionName = "Courses"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default PregnantCouplesPage;