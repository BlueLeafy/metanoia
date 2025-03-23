import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/slices/languageSlice";  // Redux action to change language
import i18n from "../i18n";  // Import i18n instance to change the language

function LanguageSwitch() {
    const langs = ["en", "it", "es", "ar", "fr", "cs"];
    const dispatch = useDispatch();
    
    // Get current language from Redux store
    const currentLang = useSelector((state) => state.language.lang);
    
    const [isOpen, setIsOpen] = useState(false);

    // Toggle Dropdown visibility
    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    // Select language and dispatch to Redux and i18next
    const handleLangSelect = (lang) => {
        try {
            
            i18n.changeLanguage(lang);  // Change language in i18next
            dispatch(setLanguage(lang)); // Update language in Redux// it is undefined but works ???
            setIsOpen(false);  // Close dropdown on language select
        } catch (error) {
            console.error("Error setting language:", error);
        }
    };

    // Handle click outside of dropdown to close it
    const handleOutsideClick = (e) => {
        if (!e.target.closest(".dropdown-container")) {
            setIsOpen(false);
        }
    };

    // Set up event listener for outside click
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    // Render available languages in the dropdown
    const renderedLang = langs.map((lang) => (
        <div
            key={lang}
            onClick={() => handleLangSelect(lang)}
            className="uppercase cursor-pointer py-1 text-center"
        >
            {lang}
        </div>
    ));

    return (
        <div className="dropdown-container relative px-1.5 font-medium">
            <button className="cursor-pointer uppercase py-1.5 px-2.5" onClick={toggleDropdown}>
                {currentLang} {/* Display current language */}
            </button>
            {isOpen && (
                <div className="dropdown-content absolute bg-neutral-100 px-2.5">
                    {renderedLang}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;
