'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Content } from '@/utilities/interfacesUtils';
import { byteArrayToBase64 } from '@/utilities/GeneralFuncions';

import Image from 'next/image';

interface ContentFormProps {
    contentData: Content;
    selector3: string;
    sectionID?: number;
    onUpdate: () => void; // Add onUpdate prop type
}

const ContentForm: React.FC<ContentFormProps> = ({ contentData, selector3, sectionID = 0, onUpdate }) => {

    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const [errorMessage, setErrorMessage] = useState(''); // State for success message

    const [content, setContent] = useState({
        id: 0,
        sectionid: 0,
        title: '',
        subtitle: '',
        price: 0,
        description: '',
        photo: { type: '', data: [0] },
        date: '',
        time: '',
        location: '',
        registerLink: '',
        SectionType: '',
        link: ''
    });

    const [imageSrc, setImageSrc] = useState<string | null>(null);

    // Effect to update state when contentData changes
    useEffect(() => {
        setContent({
            id: contentData.id ?? 0,
            sectionid: contentData.sectionid ?? 0,
            title: contentData.title ?? '', // Provide default value
            subtitle: contentData.subtitle ?? '',
            price: contentData.price ?? 0, // Assuming price should default to 0
            description: contentData.description ?? '',
            photo: {
                type: contentData.Photo?.type ?? '', // Default to empty string if undefined
                data: contentData.Photo?.data ?? [0] // Default to an empty array if undefined
            },
            date: contentData.date ?? '',
            time: contentData.time ?? '',
            location: contentData.location ?? '',
            registerLink: contentData.registerLink ?? '',
            SectionType: contentData.SectionType ?? '',
            link: contentData.link ?? ''
        });
    }, [contentData]);

    useEffect(() => {
        if (content.photo.data && content.photo.data.length > 0) {
            // Check if Photo.data is an array of numbers
            if (Array.isArray(content.photo.data)) {
                const base64String = byteArrayToBase64(content.photo.data);
                setImageSrc(`data:image/jpeg;base64,${base64String}`);
            } else {
                console.error('Photo.data is not an array:', content.photo.data);
            }
        } else {
            console.warn('No Photo provided');
        }
    }, [content]);

    const form = useRef<HTMLFormElement | null>(null); // Specify the type for the ref

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContent(prevContent => ({ ...prevContent, [name]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
                const base64Data = (reader.result as string).split(',')[1]; // Remove prefix
                const binaryString = window.atob(base64Data); // Decode base64 string
                const len = binaryString.length;
                const bytes = new Uint8Array(len);

                for (let i = 0; i < len; i++) {
                    bytes[i] = binaryString.charCodeAt(i); // Convert each character to byte
                }

                // Update content state with new photo data
                const photoData = {
                    type: file.type,
                    data: Array.from(bytes) // Convert Uint8Array to regular array of numbers
                };
                // Update content state with new photo
                setContent(prevContent => ({
                    ...prevContent,
                    photo: photoData // Update the photo property
                }));
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget; // Usa e.currentTarget para obtener el formulario actual

        try {
            // Obtener todos los botones con el mismo nombre
            const buttons = Array.from(form.elements).filter(
                (element) => element instanceof HTMLButtonElement && element.name === 'submitButton'
            ) as HTMLButtonElement[];

            // Encontrar el botón que fue presionado
            const pressedButton = buttons.find((button) => button === document.activeElement);

            if (pressedButton) {
                const buttonValue = pressedButton.value;

                if (buttonValue === "create") {
                    content.sectionid = sectionID ?? 0;

                    try {
                        await axios.post('/api/content', content);
                        setSuccessMessage('The data has been properly created'); // Set success message

                        // Resetear el formulario
                        setContent({
                            id: 0,
                            sectionid: 0,
                            title: '',
                            subtitle: '',
                            price: 0,
                            description: '',
                            photo: { type: '', data: [] },
                            date: '',
                            time: '',
                            location: '',
                            registerLink: '',
                            SectionType: '',
                            link: ''
                        });

                        // Quitar el mensaje después de 3 segundos
                        setTimeout(() => {
                            setSuccessMessage(''); // Clear the success message
                        }, 3000);

                        onUpdate();
                    } catch (error) {
                        setErrorMessage('Error creating the data'); // Optional: Set error message
                        setTimeout(() => {
                            setErrorMessage(''); // Clear the success message
                        }, 3000);
                    }

                }

                if (buttonValue === "delete") {
                    try {
                        console.log(`Attempting to delete content at: /api/content/${content.id}`);
                        console.log('Content to delete:', content);

                        // Make the DELETE request
                        const response = await axios.delete(`/api/content/${content.id}`);

                        // Check if the response is successful
                        if (response.status === 200) {
                            setSuccessMessage('The data has been properly created'); // Set success message
                        }

                        // Resetear el formulario
                        setContent({
                            id: 0,
                            sectionid: 0,
                            title: '',
                            subtitle: '',
                            price: 0,
                            description: '',
                            photo: { type: '', data: [] },
                            date: '',
                            time: '',
                            location: '',
                            registerLink: '',
                            SectionType: '',
                            link: ''
                        });

                        // Quitar el mensaje después de 3 segundos
                        setTimeout(() => {
                            setSuccessMessage(''); // Clear the success message
                        }, 3000);

                        onUpdate();
                    } catch (error) {
                        setErrorMessage('Error creating the data'); // Optional: Set error message
                        setTimeout(() => {
                            setErrorMessage(''); // Clear the success message
                        }, 3000);
                    }

                }

                if (buttonValue === "update") {
                    try {
                        // Make the DELETE request
                        const response = await axios.put(`/api/content/${content.id}`, content);

                        // Check if the response is successful
                        if (response.status === 200) {
                            setSuccessMessage('The data has been modified properly'); // Set success message
                        }

                        // Resetear el formulario
                        setContent({
                            id: 0,
                            sectionid: 0,
                            title: '',
                            subtitle: '',
                            price: 0,
                            description: '',
                            photo: { type: '', data: [] },
                            date: '',
                            time: '',
                            location: '',
                            registerLink: '',
                            SectionType: '',
                            link: ''
                        });

                        // Quitar el mensaje después de 3 segundos
                        setTimeout(() => {
                            setSuccessMessage(''); // Clear the success message
                        }, 3000);

                        onUpdate();
                    } catch (error) {
                        setErrorMessage('Error creating the data'); // Optional: Set error message
                        setTimeout(() => {
                            setErrorMessage(''); // Clear the success message
                        }, 3000);
                    }

                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    };


    return (
        <div className="p-4 min-h-screen bg-white bg-opacity-80 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
            <form
                onSubmit={handleSubmit}
                className="space-y-6 mx-auto"
                ref={form}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Section ID: {sectionID}</label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={content.title}
                        placeholder='Enter the title'
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Subtitle</label>
                    <input
                        type='text'
                        id='subtitle'
                        name='subtitle'
                        placeholder='Enter the title'
                        onChange={handleChange}
                        value={content.subtitle}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        placeholder='00.00'
                        onChange={handleChange}
                        value={content.price}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        rows={3}
                        id='description'
                        name='description'
                        placeholder='Enter the description'
                        onChange={handleChange}
                        value={content.description}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
                    <div className="flex justify-center">
                        <div className="relative flex justify-center">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={`Image for ${content.title}`}
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
                    {/* File Input and Upload Button */}
                    <div className="mt-4 flex justify-center">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden" // Hide the default file input
                            id="file-upload" // ID for the label to reference
                        />
                        <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded">
                            Upload Photo
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">date</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        value={content.date}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                    <input
                        type='text'
                        id='time'
                        name='time'
                        placeholder='Enter the Time'
                        onChange={handleChange}
                        value={content.time}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        placeholder='Enter the Location'
                        onChange={handleChange}
                        value={content.location}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Register Link</label>
                    <input
                        type='text'
                        id='registerLink'
                        name='registerLink'
                        placeholder='Enter the Register Link'
                        onChange={handleChange}
                        value={content.registerLink}
                        className="border rounded p-2 w-full"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Section Type</label>
                    <input
                        type='text'
                        id='SectionType'
                        name='SectionType'
                        placeholder='Enter the Section Type'
                        onChange={handleChange}
                        value={content.SectionType}
                        className="border rounded p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
                    <input
                        type='text'
                        id='link'
                        name='link'
                        placeholder='Enter the Link'
                        onChange={handleChange}
                        value={content.link}
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>

                <div className='flex justify-between'>
                    <button
                        type="submit"
                        name="submitButton"
                        value="create"
                        className="bg-jul-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-jul-green/40"
                        disabled={selector3 === "true" || sectionID === 0}
                    >
                        Create
                    </button>
                    <button
                        type="submit"
                        name="submitButton"
                        value="update"
                        className="bg-jul-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-jul-green/40"
                        disabled={selector3 === "false"}
                    >
                        Update
                    </button>
                    <button
                        type="submit"
                        name="submitButton"
                        value="delete"
                        className="bg-jul-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-jul-green/40"
                        disabled={selector3 === "false"}
                    >
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContentForm;