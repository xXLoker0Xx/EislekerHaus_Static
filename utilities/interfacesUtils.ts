
// DB interfaces

import { StaticImageData } from "next/image";

// Define an interface for pages
export interface Page {
    id: number; // The unique identifier for each page entry
    name: string; // The name of the page (must be unique)
    type?: string; // Optional type of the page
}

// Define la interfaz para el contenido
export interface Content {
    title: string; // The title of the content
    subtitle?: string | undefined; // Optional subtitle for additional context
    price: string | number | undefined; // The price associated with the content
    description: string; // A detailed description of the content
    Photo?: String | undefined; // Optional photo as a Buffer
    location?: string | undefined; // Optional location for the event or course
    BuyingLink?: string | undefined; // Optional registration link
    Descriptionlink?: string | undefined;
}