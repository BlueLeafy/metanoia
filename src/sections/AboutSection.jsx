import About from "../components/About";

function AboutSection({ ref }) {
    // get the bgColor from db.json

    return (
        <section ref={ref} id="about" className="h-full">
            <About />
        </section>
    );
};

export default AboutSection;