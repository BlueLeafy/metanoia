import Contact from "../components/Contact"

function ContactSection({id}) {

    return (
        <section id={id} className="min-h-[calc(100vh-64px)] h-[calc(100vh-64px)]">
            <Contact />
        </section>
    );
};

export default ContactSection;