import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetchColorsQuery } from "../store/apis/datasApi";

function NavLink({ scrollToSection }) {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState("");

    const { data: colorTheme } = useFetchColorsQuery();

    const links = t("navbar.links", { returnObjects: true }) || []; // Content from translation file

    const colorActive = colorTheme[0].lightTheme[0].value || "#000";

    const handleClick = (linkLabel, event) => {
        event.preventDefault();
        setActiveLink(linkLabel);
        scrollToSection(linkLabel);
    };

    const activeLinkClasses = (linkLabel) => {
        return activeLink === linkLabel ?
            {
                style: { color: colorActive },
                className: "underline underline-offset-8",
            } :
            {
                style: {},
                className: "underline-offset-0"
            };
    };

    const renderedLinks = links.map((link) => {
        const { className, style } = activeLinkClasses(link.label);

        return (
            <li key={link.label}
                style={link.label === "blog" ? { display: "none" } : {}}
            >
                <a
                    href={`/#${link.label}`}
                    onClick={() => handleClick(link.label, event)}
                    className={`py-3.5 px-2.5 ${className}`}
                    style={style}
                >
                    {link.label}
                </a>
            </li>
        )
    })

    return (
        <ul className="inline-flex uppercase font-medium">
            {/* renderedLinks */}
            {renderedLinks}
        </ul>
    );
};

export default NavLink;