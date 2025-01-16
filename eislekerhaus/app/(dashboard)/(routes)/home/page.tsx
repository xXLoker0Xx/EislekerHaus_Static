"use client";

import React, { useEffect, useState } from "react";

import { Content } from "@/utilities/interfacesUtils";
import { loadContent } from "@/utilities/DBloadUtils";

import FloatingElements from "@/components/FloatingElements";
import CustomBackground from "@/components/CustomBack";
import { TitleMain } from "@/components/TitleMain";
import { EvCoCardGeneral } from "@/components/EvCoCardGeneral";
import { HomeCard } from "@/components/HomeCard";

// PAGE CODE
const HomePage: React.FC = () => {
    const [services, setServices] = useState<Content[]>([]);
    const [testimonials, setTestimonials] = useState<Content[]>([]);
    const [Welcomecard, setWelcomeCard] = useState<Content[]>([]);
    const [Infocard, setInfoCard] = useState<Content[]>([]);
    const [BiographyCard, setBiographyCard] = useState<Content[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const preservices = await loadContent("Our Services");
                const pretestimonials = await loadContent("Testimonials");
                const preWelcomeCard = await loadContent("Welcome");
                const preInfocard = await loadContent("Info");
                const preBiographycard = await loadContent("Biography");
                setServices(preservices);
                setTestimonials(pretestimonials);
                setWelcomeCard(preWelcomeCard);
                setInfoCard(preInfocard);
                setBiographyCard(preBiographycard);
            } catch (error) {
                console.error("Error loading content:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={"Welcome Home"} />
            </div>

            {/* Introduction */}
            <HomeCard type={"Left"} content={Welcomecard} />

            {/* What is Eisleker House */}
            <HomeCard type={"Right"} content={Infocard} />

            {/* About section */}
            <HomeCard type={"Left"} content={BiographyCard} />

            {/* Services carousel */}
            <section className="container mx-auto py-6 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-jul-dark">Our Services</h2>
                </div>

                {/* Mobile Carousel */}
                {services.map((service) => (
                    <div key={service.title}>
                        <EvCoCardGeneral {...service} />
                    </div>
                ))}
            </section>

            {/* Testimonials */}
            <section className="py-6 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-jul-dark">What Our Families Say</h2>
                </div>
                <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory p-4">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.title}>
                            <EvCoCardGeneral {...testimonial} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
};

export default HomePage; // Ensure this line is present at the end of your file
