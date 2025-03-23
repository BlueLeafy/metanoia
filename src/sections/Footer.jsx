import { useTranslation } from "react-i18next";


function Footer() {
    const { t } = useTranslation();
    const footerContent = t("footer", { returnObjects: true }) || [];

    return (
        <footer>
            <div className="container mx-auto py-15">
                <p className="text-center">{footerContent.text}</p>
                {/* find link with right location */}
                <p className="text-center"><a className="text-blue-600 font-medium underline underline-offset-1" href="">{footerContent.policies_link}</a></p>
            </div>
        </footer>
    );
};

export default Footer;