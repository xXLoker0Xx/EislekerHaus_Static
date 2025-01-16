"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingElements from '@/components/FloatingElements';
import CustomBackground from '@/components/CustomBack';
import { TitleMainSinmb } from '@/components/TitleMain';

const ContactPage: React.FC = () => {
    const pagename = "Contact"

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // e.g., sending the data to a server
        console.log('Form submitted:', { name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        // You might want to show a success message to the user here
    };

    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMainSinmb title={pagename} />
                <div className="max-w-2xl mx-auto py-20">
                    <Card className="bg-white bg-opacity-80 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-center md:text-left text-3xl font-bold text-jul-green">Talk with Julie</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-md font-medium text-gray-700">Name</label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-md font-medium text-gray-700">Message</label>
                                    <Textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <Button type="submit" className="w-auto text-md bg-jul-red text-white hover:bg-jul-red/90">
                                        Send message
                                    </Button>
                                </div>

                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
};

export default ContactPage;