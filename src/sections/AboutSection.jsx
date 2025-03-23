import About from "../components/About";
import { useTranslation } from "react-i18next";

function AboutSection({ ref }) {
    const { t } = useTranslation();
    const linkAnchor = t("navbar.links", {returnObjects: true}) || [];

    console.log(linkAnchor);

    const linkId = linkAnchor[1]?.label || "about";
    

    return (
        <section ref={ref} id={linkId} className="h-full">
            <About />
        </section>
    );
};

export default AboutSection;