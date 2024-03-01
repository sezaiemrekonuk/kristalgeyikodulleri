import {useEffect, useState} from "react";

const useMedia = (query = 768) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${query}px)`);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return !matches;
}

export default useMedia;
