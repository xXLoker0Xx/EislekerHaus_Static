'use client'

import React from 'react';
import { EvCoPage } from '@/components/EvCoPage';

const ParentsPage = () => {
    const pagename = "Parents"
    const sectionName = "Courses"

    return (
        <EvCoPage pagename={pagename} sectionName={sectionName} />
    );
};

export default ParentsPage;