import largeLogo from '../images/logoLarge.png';
import Countdown from "react-countdown";
import Navbar from "../Components/Navbar";
import bgImage from "../images/background.png";
import bgVideo from "../images/backgroundvideo.webm";


export default (props) => {
    return (
        <>
            <div
                className={"fixed -z-10 flex items-center justify-center transition-all duration-500 ease-in-out h-screen w-screen"}>
                <video autoPlay loop muted playsInline className={"object-cover h-full w-full"} poster={bgImage}>
                    <source src={bgVideo} type="video/webm"/>
                </video>
            </div>
            <Navbar transparent/>
            <div className='overflow-hidden w-dvw h-dvh flex justify-center items-center flex-col gap-6'
                 id={props.name}>
                <img src={largeLogo} alt="" className='h-[12rem] md:h-[16rem] lg:h-[20rem]'/>
                {props.counter && (
                    <div className={`flex flex-col items-center justify-center gap-4 relative overflow-hidden`}>
                        <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff] opacity-90 ${!props.isLoaded && ' disappear'}`}>Oylamaya
                            Son</h2>
                        <div className={`${!props.isLoaded && 'smooth-appear'}`}>
                            <Countdown date={new Date(2024, 5, 9)} renderer={renderer} precision={3}/>
                        </div>
                    </div>
                )}
                <p className='text-lg tracking-[.16rem]'>#senin<b>secimin</b></p>


            </div>

        </>
    )
}

// Random component
const Completionist = () => <span className={
    `text-1xl md:text-2xl lg:text-3xl font-bold text-[#ffffff] opacity-90`
}>Oylama Başladı!
</span>;

// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
    if (completed) {
        // Render a completed state
        return <Completionist/>;
    } else {
        // Render a countdown
        return <span className={
            `text-1xl md:text-2xl lg:text-3xl font-bold text-[#ffffff] opacity-90 italic`
        }>{hours} Gün {minutes} Dakika {seconds} Saniye</span>;
    }
};