import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { useFetchColorsQuery } from "../store/apis/datasApi";

function NavLink() {
    const { t, i18n } = useTranslation();
    const [activeLink, setActiveLink] = useState("");

    const links = t("navbar.links", { returnObjects: true }) || []; 

    const renderedLinks = links.map((link) => {
        //const { className, style } = activeLinkClasses(link.path);

        return (
            <li key={link.path}
                style={link.label === "blog" ? { display: "none" } : {}}
            >
                <a
                    href={`#${link.path}`}
                    className={`py-3.5 px-2.5 `}
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