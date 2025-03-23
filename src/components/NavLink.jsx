import { useState } from "react";
import { useTranslation } from "react-i18next";

function NavLink() {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState("");

    const links = t("navbar.links", { returnObjects: true }) || []; 

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const renderedLinks = links.map((link) => {
        const isActive = activeLink === link.path;

        return (
            <li key={link.path}
                style={link.label === "blog" ? { display: "none" } : {}}
            >
                <a
                    href={`#${link.path}`}
                    className={`py-3.5 px-2.5 ${isActive ? "text-[#228B22] underline underline-offset-4" : ""}`}
                    onClick={() => handleClick(link.path)}
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