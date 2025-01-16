'use client'

import React from 'react';
import { EvCoPage } from '@/components/EvCoWogenPage';

const ParentsPage = () => {
    const pagename = "Parents"
    const sectionName = "Courses"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default ParentsPage;