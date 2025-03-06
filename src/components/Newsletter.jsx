import Card from "./Card";
import NewsletterForm from "./NewsletterForm";

function Newsletter() {
    return (
        <div className="container mx-auto flex flex-row justify-center py-20">
            <Card className="bg-neutral-100 max-w-3xl">
                <div className="p-20">
                    <h2 className="font-semibold font-roboto-condensed uppercase text-6xl text-center mb-5">Join our newsletter</h2>
                    {/* Ask Gabry for a pre-made-form React component */}
                    <NewsletterForm />
                </div>
            </Card>
        </div>
    );
};

export default Newsletter;