import { useRef } from "react";
import HeroSection from "./sections/HeroSection";
import Nav from "./sections/Nav";
import AboutSection from "./sections/AboutSection";
import ManifestoSection from "./sections/ManifestoSection";
import ChannelsSection from "./sections/ChannelsSection";
import Footer from "./sections/Footer";
import NewsletterSection from "./sections/NewsletterSection";
import ContactSection from "./sections/ContactSection";

function App() {
    // Scrolling behaviour
    const sectioinRefs = useRef({
        home: null,
        about: null,
        manifesto: null,
        channels: null,
        newsletter: null,
        contacts: null
    });

    const scrollToSection = (section) => {
        sectioinRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
    };

    //Bg Animation

    return (
        <div className="font-roboto">
            <Nav scrollToSection={scrollToSection} />
                <HeroSection ref={(el) => (sectioinRefs.current.home = el)} />
            <div className="bg-animate">
                <AboutSection ref={(el) => (sectioinRefs.current.about = el)} />
                <ManifestoSection ref={(el) => (sectioinRefs.current.manifesto = el)} />
                <NewsletterSection ref={(el) => (sectioinRefs.current.newsletter = el)} />
                <ContactSection ref={(el) => (sectioinRefs.current.contacts = el)} />
            </div>


            <div className="bg-neutral-100" ref={(el) => (sectioinRefs.current.channels = el)}>
                <ChannelsSection />
            </div>

            <Footer />
        </div>
    );
};

export default App;