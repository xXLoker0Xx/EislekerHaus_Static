import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card";

interface Service {
    title: string;
    description: string;
}

interface InfiniteCarouselProps {
    services: Service[];
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ services }) => {
    return (
        <Carousel className="w-auto   md:max-w-none mx-4 sm:mx-6 lg:mx-8">
            <CarouselContent className="-ml-1">

                {services.map((service, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="max-w-xs flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                {services.map((service, index) => (
                    <CarouselItem key={index} className="max-w-xs md:basis-1/2 lg:basis-1/3">
                        <div className="service-card bg-jul-light border-2 border-jul-yellow rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                                {service.title}
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-jul-yellow">
                                {service.title}
                            </h3>
                            <p className="text-jul-dark/80">{service.description}</p>
                            <button className="mt-4 bg-jul-red text-jul-white py-2 px-4 rounded-full hover:bg-jul-yellow/80 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    );
};

export default InfiniteCarousel;