import React, {Suspense} from "react";


import bgImage from './images/background.png';
import Navbar from "./Components/Navbar";
import Socials from "./Components/Socials";
import Loader from "./Loaders/Loader";

const Main = React.lazy(() => import('./Pages/Main'));
const Announcements = React.lazy(() => import('./Pages/Announcements'));

export default function App() {
    return (
        <div className={"overflow-hidden"}>
            <Navbar/>
            <Socials/>
            <img src={bgImage} alt=""
                 className='min-w-[1920px] w-dvw h-dvh scale-[1.02] fixed -z-10 tranlate-x-0.5 translate-y-0.5 top-0.5 left-0.5'/>
            <Suspense fallback={<Loader />}>
                <Main name="main"/>
            </Suspense>

            <Suspense fallback={<Loader />}>
                <Announcements name="announcements"/>
            </Suspense>
        </div>
    )
}