import React, {Suspense} from "react";


import bgImage from './images/background.png';
import Navbar from "./Components/Navbar";
import Socials from "./Components/Socials";
import Loader from "./Loaders/Loader";

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
    const refs = {
        "ana": React.createRef(),
        "duyurular": React.createRef(),
        "hakkinda": React.createRef(),
        "sponsorlar": React.createRef(),
        "kgo23": React.createRef(),
        "topluluklar": React.createRef(),
        "medyadabiz": React.createRef(),
        "sss": React.createRef(),
        "iletisim": React.createRef()
    }

    return (
        <div className={"overflow-hidden"}>
            <Navbar refs={refs}/>
            <Socials/>
            <img src={bgImage} alt=""
                 className='min-w-[1920px] w-dvw h-dvh scale-[1.02] fixed -z-10 tranlate-x-0.5 translate-y-0.5 top-0.5 left-0.5'/>
            <Suspense fallback={<Loader/>}>
                <Main name="ana" ref={refs.ana}/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <Announcements name="duyurular" ref={refs.duyurular}/>
            </Suspense>

            <Suspense fallback={<Loader/>}>
                <About name="hakkinda" ref={refs.hakkinda}/>
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
    )
}