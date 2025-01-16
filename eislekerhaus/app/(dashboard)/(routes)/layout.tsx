import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = async ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full bg-gray-900
            lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-72">
                <Sidebar />
            </div>
            <main className="lg:pl-72">
                <div className="flex flex-col">
                    <div className="w-full fixed h-20 z-20">
                        <Navbar />
                    </div>
                    <div className="">
                        {children}
                    </div>
                    <Footer />
                </div>

            </main>
        </div>
    )
}

export default DashboardLayout