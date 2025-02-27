const Footer = () => {
    return (
        <footer className="h-12 bg-jul-white text-jul-purple py-6 flex justify-center align-top flex-col z-10">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; 2025 Eisleker Haus. All rights reserved.</p>
                <p>
                    <a href="/Datenschutz" className="hover:underline">
                        AGB & Datenschutz
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;