import Channels from "../components/Channels";

function ChannelsSection({ ref }) {
    return (
        <section ref={ref} id="channels">
            <Channels />
        </section>
    );
};

export default ChannelsSection;