const CustomBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-90 blur-sm">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-jul-red/30 rounded-bl-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-jul-yellow/50 rounded-tr-full opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 right-1/2 w-1/3 h-1/3 bg-jul-green/30 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}

export default CustomBackground;