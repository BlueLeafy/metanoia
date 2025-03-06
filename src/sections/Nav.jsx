import Navigation from "../components/Navigation";

function Nav({ scrollToSection }) {
    return (
        <div className="w-screen px-1.5 py-1.5 bg-neutral-100 sticky top-0">
            <Navigation scrollToSection={scrollToSection} />
        </div>
    );
};

export default Nav;