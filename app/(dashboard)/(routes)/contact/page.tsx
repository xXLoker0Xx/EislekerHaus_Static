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
        // Hei kéint dir d'Formulardaten verschécken
        console.log('Formulär ofgeschéckt:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="page-fade-in min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMainSinmb title={pagename} />

                <div className="max-w-2xl mx-auto py-20 ">
                    <Card className="bg-jul-white bg-opacity-80">
                        <CardHeader>
                            <CardTitle className="text-center md:text-left text-3xl font-bold text-jul-green">
                                Schreif mir
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-md font-medium text-jul-gray">Numm</label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mt-1 border-jul-gray/30"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-md font-medium text-jul-gray">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mt-1 border-jul-gray/30"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-md font-medium text-jul-gray">Message</label>
                                    <Textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="mt-1 border-jul-gray/30"
                                        rows={4}
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        className="w-auto text-md bg-jul-red text-white hover:bg-jul-red/90 transform transition duration-300 hover:scale-105"
                                    >
                                        Message schécken
                                    </Button>
                                </div>
                            </form>

                            <div className="border-t border-jul-gray/20 pt-6">
                                <p className="text-jul-gray text-lg mb-4">
                                    Dir hutt net dat Passend fir iech fonnt?<br />
                                    Dir hutt awer Loscht zesummen eppes Flottes fir iech oder mat aneren ze ënnerhuelen?<br />
                                    Da mellt iech gäre bei mir, a mir kucken op mir eppes kenne passend zu ären Wënsch an Iddien op d‘Bee stellen.<br />
                                    Ech freeë mech iwwer all Ureegung 😊
                                </p>

                                <div className="space-y-2 text-jul-gray">
                                    <div className="flex items-center gap-2">
                                        <span></span>
                                        <span>Mail : <a href="mailto:eislekerhaus@gmail.com" className="text-jul-green hover:underline">eislekerhaus@gmail.com</a></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span></span>
                                        <span>Whatsapp : <a href="tel:+352621269956" className="text-jul-green hover:underline">621 269 956</a></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span></span>
                                        <span>Facebook : <a href="https://facebook.com/EislekerHaus" target="_blank" rel="noopener noreferrer" className="text-jul-green hover:underline">Eisleker Haus</a></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span></span>
                                        <span>Homepage : <a href="https://www.eislekerhaus.lu" target="_blank" rel="noopener noreferrer" className="text-jul-green hover:underline">www.eislekerhaus.lu</a></span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <FloatingElements />
        </div>
    );
};

export default ContactPage;