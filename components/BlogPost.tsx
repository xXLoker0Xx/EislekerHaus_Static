
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';


interface BlogPostProps {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}

export const BlogPost = ({
    title,
    description,
    date,
    imageUrl
}: BlogPostProps) => {
    return (
        <Card className="bg-white bg-opacity-80 hover:cursor-pointer">
            <Image
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
                width={192} // Especifica el ancho deseado
                height={192} // Especifica la altura deseada
            />
            <CardHeader>
                <CardTitle className="text-xl text-jul-green">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 mb-2">{description}</p>
                <p className="text-sm text-gray-500">{date}</p>
            </CardContent>
        </Card>
    );
}
