import Card from "./Card";
import { useFetchMediaQuery } from "../store/apis/datasApi";
import { useTranslation } from "react-i18next";

function About() {
    // logoType from db.json
    const {data: media, isLoading, isError} = useFetchMediaQuery();
    // content from translation
    const { t, i18n } = useTranslation();
    const aboutContent = t("about", {returnObjects: true}) || [];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data.</p>

    // fetch logo
    const logotypeSrc = media[0].images[0].logotype[0].lightSrc;

    const keyword = i18n.language === "it" ? "AGIRE!" : "ACT!";

    const renderedAboutText = aboutContent.content.map((text, index) => {
        const parts = text.split(keyword);
    
        return (
            <div key={index} className="mb-5">
                {/* Render the first part as a normal <p> */}
                <p className="font-roboto">{parts[0]}</p>
                
                {/* If "ACT!" exists, render it in a separate <h3> */}
                {parts.length > 1 && (
                    <>
                        <h3 className="text-red-500 font-extrabold text-9xl text-center font-roboto-condensed">{keyword}</h3>
                        {parts[1] && <p>{parts[1]}</p>}  {/* Render the rest of the text if there's any */}
                    </>
                )}
            </div>
        );
    });
    
    return (
        <div className="container mx-auto flex flex-row justify-center py-20">
            <Card className="bg-neutral-100 max-w-3xl">
                <div className="p-20">
                    <article>
                        <h1 className="mb-10"><img src={logotypeSrc} /></h1>
                        {/* rendered ps */}
                        {renderedAboutText}
                        <div>
                            <p><a className="text-blue-600 font-medium underline underline-offset-1" href="/#manifesto">{aboutContent.cta}</a></p>
                        </div>
                    </article>
                </div>
            </Card>
        </div>
    );
};

export default About;