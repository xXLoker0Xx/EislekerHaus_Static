const Footer = () => {
    return (
        <footer className="bg-jul-white text-jul-purple py-8 flex justify-center flex-col z-10">
            <div className="container mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact</h3>
                        <p>Eisleker Haus Sàrl</p>
                        <p>26 an d’Klaus</p>
                        <p>L-9956 Hachiville, Luxembourg</p>
                        <p>+352 621 269 956</p>
                        <p>
                            <a href="mailto:eislekerhaus@gmail.com" className="hover:underline">
                                eislekerhaus@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Legal Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Legal</h3>
                        <p>Niederlassungsgenehmigung: 10178380 / 0</p>
                        <p>Umsatzsteuer-ID: LU36503647</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Links</h3>
                        <p>
                            <a href="/Datenschutz" className="hover:underline">
                                AGB & Datenschutz
                            </a>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <p className="mt-6">© 2025 Eisleker Haus. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;