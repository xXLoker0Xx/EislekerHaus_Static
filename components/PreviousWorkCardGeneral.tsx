
import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PreviousWorkCardGeneralProps {
    title: string;
    description: string;
}

export const PreviousWorkCardGeneral = ({
    title,
    description,
}: PreviousWorkCardGeneralProps) => {


    return (
        <Card className="bg-white bg-opacity-80">
            <CardHeader>
                <CardTitle className="text-lg text-jul-green">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-gray-600 mb-2">{description}</p>

            </CardContent>
        </Card>
    );
}