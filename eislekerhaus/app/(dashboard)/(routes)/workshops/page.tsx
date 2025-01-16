
"use client";

import React from 'react';
import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { WorkshopCardGeneral } from '@/components/WorkshopCardGeneral';
import { TitleMain } from '@/components/TitleMain';

const CustomWorkshopsPage = () => {
    const workshops = [
        {
            title: "Intensive Family Systems Workshop",
            description: "Explore family dynamics and systemic interventions.",
            duration: "2 days"
        },
        {
            title: "Crisis Intervention in Families",
            description: "Techniques for managing acute family crises.",
            duration: "1 day"
        },
        {
            title: "Integrating Mindfulness in Family Therapy",
            description: "Mindfulness-based approaches for family healing.",
            duration: "3 days"
        },
        {
            title: "Narrative Therapy Techniques Workshop",
            description: "Storytelling and narrative approaches in family therapy.",
            duration: "2 days"
        },
        {
            title: "Adolescent-Parent Relationship Workshop",
            description: "Strategies for improving teen-parent dynamics.",
            duration: "1 day"
        },
        {
            title: "Family Therapy Ethics and Legal Considerations",
            description: "Navigate ethical dilemmas in family therapy practice.",
            duration: "2 days"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-jul-white to-jul-yellow/10 p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title='Workshops' />

                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12">
                    {workshops.map((workshop) => (
                        <div key={workshop.title}>
                            <WorkshopCardGeneral {...workshop} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
};

export default CustomWorkshopsPage;