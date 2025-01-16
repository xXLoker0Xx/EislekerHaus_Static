import { useEffect, useState } from "react";
import { ItfcHomeCard } from "@/utilities/interfacesUtils";
import { Button } from "./ui/button";
import { byteArrayToBase64 } from "@/utilities/GeneralFuncions";
import Image from 'next/image';


export const HomeCard: React.FC<ItfcHomeCard> = ({
    type,
    content,
}) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        if (content[0]?.Photo && content[0]?.Photo.data) {
            // Check if Photo.data is an array of numbers
            if (Array.isArray(content[0]?.Photo.data)) {
                const base64String = byteArrayToBase64(content[0]?.Photo.data);
                setImageSrc(`data:image/jpeg;base64,${base64String}`);
            } else {
                console.error('Photo.data is not an array:', content[0]?.Photo.data);
            }
        } else {
            console.warn('No Photo provided');
        }
    }, [content]);

    return (
        <>
            {type === "Left" ? (
                <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

                    {/* Left Column: Image */}
                    <div className="flex justify-center">
                        <div className="relative flex justify-center">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={`Image for ${content[0]?.title}`}
                                    className="max-h-[50vh] rounded-b-full object-contain shadow-jul-white"
                                    width={500} // Especifica el ancho deseado
                                    height={400} // Especifica la altura deseada
                                />
                            ) : (
                                <p>...loading</p>
                            )}
                            <div className="absolute inset-0 bg-jul-white/20 opacity-50"></div>
                        </div>
                    </div>

                    {/* Right Column: Text and Button */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex flex-col justify-center space-y-6 h-full">
                            <h2 className="text-jul-purple text-3xl font-bold text-center md:text-left my-4">
                                {content[0]?.title}
                            </h2>
                            <p className="text-lg text-gray-700 text-center md:text-left">
                                {content[0]?.description}
                            </p>
                        </div>
                        {content[0]?.link ? (
                            <Button
                                onClick={() => window.open(content[0]?.link, '_blank')}
                                className="bg-jul-yellow text-jul-dark px-6 py-4 rounded-sm font-semibold hover:cursor-pointer"
                            >
                                More About Julie
                            </Button>
                        ) : null}
                    </div>
                </section>
            ) : (
                <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* Left Column: Text and Button */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex flex-col justify-center space-y-6 h-full">
                            <h2 className="text-jul-purple text-3xl font-bold text-center md:text-left my-4">
                                {content[0]?.title}
                            </h2>
                            <p className="text-lg text-gray-700 text-center md:text-left">
                                {content[0]?.description}
                            </p>
                        </div>
                        {content[0]?.link ? (
                            <Button
                                onClick={() => window.open(content[0]?.link, '_blank')}
                                className="bg-jul-yellow text-jul-dark px-6 py-4 rounded-sm font-semibold hover:cursor-pointer"
                            >
                                More About Julie
                            </Button>
                        ) : null}
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex justify-center">
                        <div className="relative flex justify-center">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={`Image for ${content[0]?.title}`}
                                    className="max-h-[50vh] rounded-b-full object-contain shadow-jul-white"
                                    width={500} // Especifica el ancho deseado
                                    height={400} // Especifica la altura deseada
                                />
                            ) : (
                                <p>...loading</p>
                            )}
                            <div className="absolute inset-0 bg-jul-white/20 opacity-50"></div>
                        </div>
                    </div>
                </section>
            )}
        </>


    );
};

export default HomeCard;
