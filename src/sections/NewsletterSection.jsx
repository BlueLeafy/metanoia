import Newsletter from "../components/Newsletter";

function NewsletterSection({id}) {

    return (
        <section id={id} className="min-h-[calc(100vh-64px)] h-[calc(100vh-64px)]">
            <Newsletter />
        </section>
    );
};

export default NewsletterSection;