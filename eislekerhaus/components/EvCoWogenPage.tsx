
import CustomBackground from "./CustomBack";
import FloatingElements from "./FloatingElements";
import { TitleMain } from "./TitleMain";
import { EvCoWoCardGeneral } from "./EvCoWoCardGeneral";
import { Content } from "@/utilities/interfacesUtils";

// INTERFACES
interface EvCoPageProp {
    pagename: string,
    courses: Content[],
}

// PAGE CODE
export const EvCoWogenPage: React.FC<EvCoPageProp> = ({ pagename, courses }) => {

    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
                    {courses.map((course) => (
                        <div key={course.title}>
                            <EvCoWoCardGeneral {...course} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
}