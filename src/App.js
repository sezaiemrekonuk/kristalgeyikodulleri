import React, {Suspense} from "react";


import bgImage from './images/background.png';
import Navbar from "./Components/Navbar";
import Socials from "./Components/Socials";
import Loader from "./Loaders/Loader";

const Main = React.lazy(() => import('./Pages/Main'));
const Announcements = React.lazy(() => import('./Pages/Announcements'));
const About = React.lazy(() => import('./Pages/About'));
const Sponsors = React.lazy(() => import('./Pages/Sponsors'));
const SliderEngineering = React.lazy(() => import('./Pages/SliderEngineering'))
const SliderManagement = React.lazy(() => import('./Pages/SliderManagement'))
const SliderArtCulture = React.lazy(() => import('./Pages/SliderArtCulture'))
const UsOnMedia = React.lazy(() => import('./Pages/UsOnMedia'))

export default function App() {
    return (
        <div className={"overflow-hidden"}>
            <Navbar/>
            <Socials/>
            <img src={bgImage} alt=""
                 className='min-w-[1920px] w-dvw h-dvh scale-[1.02] fixed -z-10 tranlate-x-0.5 translate-y-0.5 top-0.5 left-0.5'/>
            <Suspense fallback={<Loader/>}>
                <Main name="ana"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Announcements name="duyurular"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <About name="hakkinda"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Sponsors name="sponsorlar"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <SliderEngineering name="kgo23"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <SliderManagement name="kgo23"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <SliderArtCulture name="kgo23"/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <UsOnMedia name={"medyadabiz"}/>
            </Suspense>
        </div>
    )
}