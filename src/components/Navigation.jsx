import { useFetchMediaQuery } from "../store/apis/datasApi";
import NavLink from "./NavLink";
import LanguageSwitch from "./LanguageSwitch";

function Navigation() {
    const { data: media, isLoading, isError } = useFetchMediaQuery();

    if (isLoading) return <p>Loading...</p>
    if (isError || !media) return <p>Error loading data...</p>

    const logoType = media?.[0]?.images?.[0]?.logotype?.[0];

    return (
        <section className="container mx-auto">
            <div className="flex flex-row items-center gap-1.5 justify-between">
                <div>
                    <a href="/">
                        <img style={{ width: "11rem" }} src={logoType.lightSrc} alt="Logo" />
                    </a>
                </div>
                <div>
                    {/* NavLink component */}
                    <NavLink  />
                </div>
                <div>
                    {/* TO DO */}
                    <LanguageSwitch />
                </div>
            </div>
        </section>
    );
}

export default Navigation;
