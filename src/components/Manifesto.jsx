import Card from "./Card";
import { useTranslation } from "react-i18next";

function Manifesto() {
    // Get content text with translation
    const { t, i18n } = useTranslation();
    const manifestoContent = t("manifesto", { returnObjects: true }) || [];

    const boldWords = i18n.language === "it" ? ["COMUNITÀ METANOIA", "abitudine all'AZIONE", "CORAGGIO", "piccole vittorie GIORNALIERE"] : ["METANOIA COMMUNITY", "habit of ACTION", "COURAGE", "small DAILY victories"];

    // Rendered p
    const renderedPs = manifestoContent.content.map((text) => {
        return (
            <p key={text} className="mb-5">
                {
                text.split(new RegExp(`(${boldWords.join("|")})`, "gi")).map((part, index) =>
                    boldWords.some(word => word === part) ? <strong key={index}>{part}</strong> : part
                )}
            </p>
        );
    });

    // Rendered list
    const renderedGoals = manifestoContent.goals.map((goal) => {
        return (
            <li key={goal}>
                {goal}
            </li>
        );
    });

    return (
        <div className="container mx-auto flex flex-row justify-center py-20">
            <Card className="bg-neutral-100 max-w-3xl">
                <div className="p-20">
                    <article className="font-roboto">
                        <header className="mb-10">
                            <h2 className="text-7xl font-roboto-condensed font-normal uppercase">{manifestoContent.title}</h2>
                            <span className="text-gray-400">{manifestoContent.date}</span>
                        </header>
                        {/* rendered ps */}
                        {renderedPs}
                        <ul className="list-disc ps-3.5">
                            {renderedGoals}
                        </ul>
                        <div className="mt-5">
                            {/* links to documents */}
                            <p className="mb-5"><a className="text-blue-600 font-medium underline underline-offset-1" href="/#newsletter">Join our newsletter</a></p>
                            {/* check in jsons files links show different location */}
                            <p className="mb-5">Read the <a className="text-blue-600 font-medium underline underline-offset-1" href={manifestoContent.links.download_manifesto}>Manifesto in PDF version</a></p>
                            <p className="mb-5">Read the <a className="text-blue-600 font-medium underline underline-offset-1" href={manifestoContent.links.founders_guidelines}>Founder Guidelines</a></p>
                        </div>
                    </article>
                </div>
            </Card>
        </div>
    );
};

export default Manifesto;