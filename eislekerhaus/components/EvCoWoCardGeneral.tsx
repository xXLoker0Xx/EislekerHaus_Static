import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "./ui/button";
import { CalendarIcon, MapPinIcon } from 'lucide-react';

import { Content } from "@/utilities/interfacesUtils";


export const EvCoWoCardGeneral: React.FC<Content> = ({
    title,
    subtitle,
    SectionType,
    price,
    description,
    Photo,
    location,
    BuyingLink,
    Descriptionlink,
}) => {
    return (
        <Card className="bg-white bg-opacity-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="text-2xl text-jul-green">
                    <div className="flex flex-wrap justify-between items-center">
                        <h1 className="font-bold">{title}</h1>
                        {SectionType && (
                            <div className="my-2 flex items-center text-base text-jul-red">
                                <CalendarIcon className="w-4 h-4 mr-1" />
                                <span>{SectionType}</span>
                            </div>
                        )}
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="my-2 flex items-center text-base text-jul-red">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                </div>
                <p className="text-lg text-gray-600 mb-6">{description}</p>
                <div className="space-y-2 mb-6">
                    {location && (
                        <div className="flex items-center text-sm text-jul-green">
                            <MapPinIcon className="w-4 h-4 mr-2" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
                {Descriptionlink && (
                    <Button
                        className="bg-jul-red text-white hover:bg-jul-red/90"
                        onClick={() => window.open(Descriptionlink, '_blank')}
                    >
                        More Info
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}