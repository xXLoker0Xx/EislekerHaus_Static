'use client'

import React from 'react';
import { EvCoPage } from '@/components/EvCoWogenPage';

const KidsPage = () => {
    const pagename = "Kids"
    const sectionName = "Courses"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default KidsPage;