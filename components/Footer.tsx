const Footer = () => {
    return (
        <footer className="bg-jul-white text-jul-purple py-8 flex justify-center flex-col z-10">
            <div className="container mx-auto px-6 text-center">

                {/* Copyright */}
                <p>
                    <div className="space-x-2">
                        <a href="/Impressum" className="hover:underline">Impressum </a> 
                        /
                        <a href="/AGB" className="hover:underline">AGB </a> 
                        /
                        <a href="/Datenschutz" className="hover:underline">Datenschutz</a>
                    </div>
                </p>
                <p className="mt-3">© 2025 Eisleker Haus. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;