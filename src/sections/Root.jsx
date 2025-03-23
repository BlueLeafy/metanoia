import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ManifestoSection from "./ManifestoSection";
import NewsletterSection from "./NewsletterSection"
import ContactSection from "./ContactSection";
import ChannelsSection from "./ChannelsSection";
import Footer from "./Footer";

function Root() {
    const { t } = useTranslation();

    const linkPath = t("navbar.links", { returnObjects: true }) || [];

    return (
        <div className="font-roboto">
            <Nav />

            <HeroSection id={linkPath[0].path} />

            {/* animate bg */}
            <div className="bg-animate">
                <AboutSection id={linkPath[1].path} />
                <ManifestoSection id={linkPath[2].path} />
                <NewsletterSection id={linkPath[3].path} />
                <ContactSection id={linkPath[6].path} />
            </div>

            {/* Channels */}
            <div className="bg-neutral-50">
                <ChannelsSection id={linkPath[4].path} />
            </div>

            <Footer />
        </div>

    )
};

export default Root;