"use client";

import { PreviousWorksPageGen } from '@/components/PreviousWorkPage';
import React from 'react';

const previousworksPage = () => {
    const pagename = "Previous Works"
    const previousworks = [
        {
            title: "Parenting Support Groups",
            description: "Julie Oswall Parenting Support Groups offer a safe and collaborative space where parents can share challenges and receive practical guidance. With her warm and empathetic approach, Julie provides effective strategies for managing daily family situations and improving communication. Parents consistently report feeling more confident and supported after attending, with over 90% expressing high satisfaction in post-session surveys."
        },
        {
            title: "Teen-Parent Communication Workshops",
            description: "Julie’s Teen-Parent Communication Workshops are designed to help families overcome communication barriers and resolve conflicts in a healthy way. Through interactive activities and guided discussions, both teens and parents gain valuable tools for better understanding and emotional connection. Feedback has been overwhelmingly positive, with 95% of parents saying they experienced significant improvements in their relationships after the workshop."
        },
        {
            title: "Family Bonding Retreats",
            description: "Julie Oswall Family Bonding Retreats provide a unique opportunity for families to reconnect in a relaxing and positive environment. Through playful activities, group dynamics, and moments of reflection, Julie helps families create lasting memories, overcome emotional challenges, and learn strategies for maintaining healthy, balanced relationships at home. Participants frequently highlight the transformative experience, with 97% of families expressing deep satisfaction and a desire to return."
        }
    ];

    return (
        <PreviousWorksPageGen pagename={pagename} previousworks={previousworks} />
    );
};

export default previousworksPage;