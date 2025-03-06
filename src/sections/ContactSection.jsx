import Contact from "../components/Contact"

function ContactSection({ref}) {
    return (
        <section ref={ref} id="contacts" className="min-h-[calc(100vh-64px)] h-[calc(100vh-64px)]">
            <Contact />
        </section>
    );
};

export default ContactSection;