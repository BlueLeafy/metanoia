import YouTube from "../assets/socialIcons/youtubeFull.svg"

function Channels() {
    return (
        <div className="container mx-auto flex flex-row gap-5 items-center py-20">
            <div className="w-2/5">
                <h2 className="font-roboto-condensed font-extralight text-8xl">Our Social World</h2>
            </div>
            <div className="w-3/5">
                <img className="w-80 mt-5" src={YouTube} />
            </div>
        </div>
    );
};

export default Channels;