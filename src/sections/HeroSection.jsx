import HeroGrid from "../components/HeroGrid";

function HeroSection({ ref }) {
    // eventually put a slide here??

    return (
        <section ref={ref} id="home" className="min-h-[calc(100vh-64px)] h-[calc(100vh-64px)]">
            <HeroGrid />
        </section>
    );
};

export default HeroSection;