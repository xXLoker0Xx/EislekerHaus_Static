import React from 'react';
import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import { PreviousWorkCardGeneral } from './PreviousWorkCardGeneral';

interface PreviousWorks {
    title: string;
    description: string;
}

interface PreviousWorksPageGenProps {
    pagename: string;
    previousworks?: PreviousWorks[];
}

export const PreviousWorksPageGen: React.FC<PreviousWorksPageGenProps> = ({ pagename, previousworks = [] }) => {
    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col space-y-8">
                    {previousworks.map((work, index) => (
                        <div
                            key={work.title}
                            className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                        >
                            <div className={`w-full lg:w-4/5 ${index % 2 === 0 ? 'lg:pr-4' : 'lg:pl-4'}`}>
                                <PreviousWorkCardGeneral {...work} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FloatingElements />
        </div>
    );
}