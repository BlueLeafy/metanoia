import Manifesto from "../components/Manifesto";

function ManifestoSection({id}) {

    return (
        <section id={id} className="h-full">
            <Manifesto />
        </section>
    );
};

export default ManifestoSection;