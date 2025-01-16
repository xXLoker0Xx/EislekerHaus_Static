
import React, { useEffect, useState } from 'react';

import { Content } from '@/utilities/interfacesUtils';
import { loadContent } from '@/utilities/DBloadUtils';

import CustomBackground from "./CustomBack";
import FloatingElements from "./FloatingElements";
import { TitleMain } from "./TitleMain";
import { EvCoCardGeneral } from "./EvCoCardGeneral";

// INTERFACES
interface EvCoPageProp {
    pagename: string,
    sectionName: string,
}

// PAGE CODE
export const EvCoPage: React.FC<EvCoPageProp> = ({ pagename, sectionName }) => {
    const [courses, setCourses] = useState<Content[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const precourses = await loadContent(sectionName);

                setCourses(precourses);
            } catch (error) {
                console.error("Error loading content:", error);
            }
        };

        fetchData();
    }, [sectionName]); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {courses.map((course) => (
                        <div key={course.title}>
                            <EvCoCardGeneral {...course} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
}