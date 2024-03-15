import React, {Suspense, useEffect} from "react";


import bgImage from './images/background.png';
import bgVideo from './images/backgroundvideo.webm';
import Navbar from "./Components/Navbar";
import Socials from "./Components/Socials";
import Loader from "./Loaders/Loader";
import FullScreenLoader from "./Components/FullScreenLoader";

const Main = React.lazy(() => import('./Pages/Main'));
const Announcements = React.lazy(() => import('./Pages/Announcements'));
const About = React.lazy(() => import('./Pages/About'));
const Sponsors = React.lazy(() => import('./Pages/Sponsors'));
const SliderEngineering = React.lazy(() => import('./Pages/SliderEngineering'));
const SliderManagement = React.lazy(() => import('./Pages/SliderManagement'));
const SliderArtCulture = React.lazy(() => import('./Pages/SliderArtCulture'));
const UsOnMedia = React.lazy(() => import('./Pages/UsOnMedia'));
const FAQ = React.lazy(() => import('./Pages/FAQ'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const Communities = React.lazy(() => import('./Pages/Communities'));

export default function App() {
    const [background, setBackground] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const getScreenWidth = () => {
        return window.innerWidth;
    }

    useEffect(() => {
        setTimeout(() => {
                setLoading(false);
            }
            , 3000);
        window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                if (scrollY === 0) {
                    setBackground(true);
                } else if (scrollY > 0 && scrollY > getScreenWidth() / 4) {
                    setBackground(false);
                }
            }
        )

        if (window.scrollY === 0) {
            setBackground(true);
        }
    }, []);


    return (
        <div className={"overflow-hidden"}>

            {loading && <FullScreenLoader/>}

            <Navbar/>
            <Socials/>

            <div
                className={"fixed -z-10 flex items-center justify-center transition-all duration-500 ease-in-out h-screen w-screen "
                    + (background ? "opacity-100" : "opacity-0")
                }>
                <video autoPlay loop muted playsInline className={"object-cover h-full w-full"} poster={bgImage}>
                    <source src={bgVideo} type="video/webm"/>
                </video>
            </div>


            <div className={"fixed -z-20 flex items-center justify-center object-contain"}>
                <img src={bgImage} alt="background" className={"h-dvh min-w-[1920px]"}/>
            </div>

            <Suspense fallback={<Loader/>}>
                <Main name="ana" counter isLoaded={loading}/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Announcements name="duyurular"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <About name="hakkimizda"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Sponsors name="sponsorlar"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <SliderEngineering name="kgo23"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <SliderManagement name=""/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <SliderArtCulture name=""/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Communities name="topluluklar"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <UsOnMedia name={"medyadabiz"}/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <FAQ name={"sss"}/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Contact name={"iletisim"}/>
            </Suspense>
        </div>
    );
}