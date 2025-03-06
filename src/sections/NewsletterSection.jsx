import Newsletter from "../components/Newsletter";

function NewsletterSection({ref}) {
    return (
        <section ref={ref} id="newsletter" className="min-h-[calc(100vh-64px)] h-[calc(100vh-64px)]">
            <Newsletter />
        </section>
    );
};

export default NewsletterSection;