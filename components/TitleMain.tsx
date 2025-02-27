
interface TitleMainProp {
    title: string
}

export const TitleMain = ({
    title
}: TitleMainProp) => {
    return (
        <h1 className="text-4xl font-bold text-center mb-12 text-jul-purple bg-white bg-opacity-0 p-4 rounded-lg">
            {title}
        </h1>
    );
}

export const TitleMainSinmb = ({
    title
}: TitleMainProp) => {
    return (
        <h1 className="text-4xl font-bold text-center text-jul-purple bg-white bg-opacity-0 p-4 rounded-lg">
            {title}
        </h1>
    );
}