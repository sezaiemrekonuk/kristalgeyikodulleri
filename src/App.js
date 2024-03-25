import React, {Suspense, useEffect} from "react";


import bgImage from './images/background.png';
import Socials from "./Components/Socials";
import FullScreenLoader from "./Components/FullScreenLoader";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";


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
const OurStory = React.lazy(() => import('./Pages/OurStory'));


export default function App() {
    const [background, setBackground] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Suspense fallback={<FullScreenLoader/>}><Main name="ana" counter isLoaded={loading}/></Suspense>
        }, {
            path: '/duyurular',
            element: <Suspense fallback={<FullScreenLoader/>}><Announcements name="duyurular"/></Suspense>
        }, {
            path: '/hakkimizda',
            element: <Suspense fallback={<FullScreenLoader/>}><About name="hakkimizda"/></Suspense>
        }, {
            path: '/hikayemiz',
            element: <Suspense fallback={<FullScreenLoader/>}><OurStory name="hikayemiz"/></Suspense>
        }, {
            path: '/sponsorlar',
            element: <Suspense fallback={<FullScreenLoader/>}><Sponsors name="sponsorlar"/></Suspense>
        }, {
            path: '/kgo23',
            element: <Suspense fallback={<FullScreenLoader/>}>
                <SliderArtCulture name="kgo23"/>
                <SliderEngineering name="kgo23"/>
                <SliderManagement name="kgo23"/>
            </Suspense>
        }, {
            path: '/yonetim',
            element: <Suspense fallback={<FullScreenLoader/>}><SliderManagement name="yonetim"/></Suspense>
        }, {
            path: '/sanat-kultur',
            element: <Suspense fallback={<FullScreenLoader/>}><SliderArtCulture name="sanat-kultur"/></Suspense>
        }, {
            path: '/topluluklar',
            element: <Suspense fallback={<FullScreenLoader/>}><Communities name="topluluklar"/></Suspense>
        }, {
            path: '/medyadabiz',
            element: <Suspense fallback={<FullScreenLoader/>}><UsOnMedia name="medyadabiz"/></Suspense>
        }, {
            path: '/sss',
            element: <Suspense fallback={<FullScreenLoader/>}><FAQ name="sss"/></Suspense>
        }, {
            path: '/iletisim',
            element: <Suspense fallback={<FullScreenLoader/>}><Contact name="iletisim"/></Suspense>
        },])



    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);


    return (<div className={"overflow-hidden"}>

        {loading && <FullScreenLoader/>}

        <Socials/>
        <SpeedInsights/>
        <Analytics/>


        <div className={"fixed -z-20 flex items-center justify-center object-contain"}>
            <img src={bgImage} alt="background" className={"h-dvh min-w-[1920px]"}/>
        </div>

        <RouterProvider router={router}/>
        {/*<Suspense fallback={<FullScreenLoader/>}>
                <Main name="ana" counter isLoaded={loading}/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <Announcements name="duyurular"/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <About name="hakkimizda"/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <OurStory name="hikayemiz"/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <Sponsors name="sponsorlar"/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <SliderEngineering name="kgo23"/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <SliderManagement name=""/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <SliderArtCulture name=""/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <Communities name="topluluklar"/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <UsOnMedia name={"medyadabiz"}/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <FAQ name={"sss"}/>
            </Suspense>

            <Suspense fallback={<FullScreenLoader/>}>
                <Contact name={"iletisim"}/>
            </Suspense>*/}
    </div>);
}