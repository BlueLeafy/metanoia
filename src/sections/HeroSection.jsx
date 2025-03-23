import HeroGrid from "../components/HeroGrid";

function HeroSection({id}) {

    return (
        <section id={id} className="min-h-[calc(100vh-64px)] h-[calc(100vh-64px)]">
            <HeroGrid />
        </section>
    );
};

export default HeroSection;