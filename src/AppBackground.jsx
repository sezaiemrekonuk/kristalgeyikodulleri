import bgImage from "./images/background.png";
import React, {useEffect, useRef} from "react";

export default function AppBackground() {
    // write me a onMount function that animates the background opacity from 0 to 1
    const bgRef = useRef(null);


    useEffect(() => {
        bgRef.opacity = 0;
        bgRef.transition = 'opacity 2s ease-in-out';
        bgRef.opacity = 1;
    })

    return (
        <img src={bgImage} alt="" ref={bgRef}
             className={'min-w-[1920px] w-dvw h-dvh scale-[1.02] fixed -z-10 translate-x-0.5 translate-y-0.5 top-0.5 left-0.5 '
             }/>
    )
}