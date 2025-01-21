import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "./ui/button";
import { LocateFixed, MapPinIcon } from 'lucide-react';
import { Content } from "@/utilities/interfacesUtils";

export const EvCoWoCardGeneral: React.FC<Content> = ({
    title,
    subtitle,
    price,
    description,
    Photo,
    location,
    BuyingLink,
    Descriptionlink,
}) => {

    return (
        <Card className="bg-jul-white bg-opacity-80 border border-jul-green rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="text-2xl text-jul-green">
                    <div className="flex flex-wrap justify-between items-center">
                        <h1 className="font-bold">{title}</h1>
                    </div>
                    <div className="flex items-center text-base text-jul-red my-2">
                        <span>Präis: {price} €</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-gray-600 mb-6">{description}</p>
                <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-jul-green">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center text-base text-jul-red my-2">
                        <LocateFixed className="w-4 h-4 mr-1" />
                        <span>{subtitle}</span>
                    </div>

                </div>
                <div className="flex flex-row items-center justify-between">
                    {Descriptionlink && (
                        <Button
                            className="bg-jul-red text-white hover:bg-jul-red/90"
                            onClick={() => (window.location.href = Descriptionlink)}
                        >
                            Méi Info
                        </Button>
                    )}
                    {BuyingLink && (
                        <Button
                            className="bg-jul-red text-white hover:bg-jul-red/90"
                            onClick={() => window.open(BuyingLink, '_blank')}
                        >
                            Mell mech un!
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}