import Manifesto from "../components/Manifesto";

function ManifestoSection({ref}) {
    return (
        <section ref={ref} id="manifesto" className="h-full">
            <Manifesto />
        </section>
    );
};

export default ManifestoSection;