import { useState } from "react";
import { useFetchMediaQuery, useFetchColorsQuery } from "../store/apis/datasApi";
import { useTranslation } from "react-i18next";

function HeroGrid() {
    const [isOver, setIsOver] = useState(null);

    // fetch data for colors and media
    const { data: media, isLoading, isError } = useFetchMediaQuery();
    const { data: colorsTheme } = useFetchColorsQuery();

    // fetch text
    const { t } = useTranslation();

    const heroContents = t("hero.sections", { returnObjects: true }) || []; // get content

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data...</p>;

    const lightThemeColors = colorsTheme?.[0]?.lightTheme?.map((color) => color.value) || [];

    // 
    const handleMouseOver = (index) => setIsOver(index);
    const handleMouseOut = () => setIsOver(false); // Reset the hovered state when mouse leaves

    const renderedGridTiles = heroContents.map((text, index) => {
        const textColor = lightThemeColors[index % lightThemeColors.length];

        return (
            <div
                key={text.title}
                className="flex flex-col justify-center items-start px-10 hover-2 cursor-default"
                style={{"--gradient-color": textColor}}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
            >
                <h4 style={{ color: isOver === index ? "white" : `${textColor}` }} 
                className="font-roboto-condensed text-4xl uppercase font-extrabold mb-1.5 transition-all duration-700 ease-in-out">{text.title}</h4>
                <p className="text-xl">{text.description}</p>
            </div>
        )
    })


    return (
        <div className="grid grid-cols-5 auto-rows-auto gap-2.5">
            {/* YouTube Video */}
            <div className="col-span-3 row-span-full h-full flex flex-col justify-center bg-black">
                <iframe
                    style={{ width: "100%", maxWidth: "100%", aspectRatio: 16 / 9 }}
                    src={media[0].video[0].src}
                    title={media[0].video[0].title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>

            {/* Rendered Grid Tiles in Two Columns */}
            <div className="col-span-2 grid grid-cols-2 gap-2.5 h-full">
                {renderedGridTiles}
            </div>
        </div>
    );
};

export default HeroGrid;