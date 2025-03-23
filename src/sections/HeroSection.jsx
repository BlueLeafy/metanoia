import HeroGrid from "../components/HeroGrid";

function HeroSection({id}) {

    return (
        <section id={id}>
            <HeroGrid />
        </section>
    );
};

export default HeroSection;