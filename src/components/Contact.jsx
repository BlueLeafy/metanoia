import ContactForm from "./ContactForm";
import Card from "./Card";

function Contact() {
    return (
        <div className="container mx-auto flex flex-row justify-center py-20">
            <Card className="bg-neutral-100 w-4/5">
                <div className="p-20 flex flex-row justify-between items-center">
                    <div className="w-1/2">
                        <h2 className="text-9xl font-semibold">Write us</h2>
                    </div>
                    <div className="w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Contact;