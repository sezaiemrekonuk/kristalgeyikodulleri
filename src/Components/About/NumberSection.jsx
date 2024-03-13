import {useEffect, useState} from "react";
import IncreasingNumberComponent from "./IncreasingNumberComponent";

const NumberSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        });

        observer.observe(document.getElementById("hakkimizda"));

        return () => {
            observer.disconnect();
        };
    }, []);

    return isVisible && (
        <div
            className={"flex flex-col lg:flex-row flex-wrap gap-4 items-center justify-center md:justify-between md:w-2/3 md:mx-40 mt-10 border-white border bg-white bg-opacity-70 p-12"}>
            <IncreasingNumberComponent value={40000} title={"OY"}/>
            <IncreasingNumberComponent value={5000} title={"KATILIMCI"}/>
            <IncreasingNumberComponent value={1500} title={"ADAY"}/>
            <IncreasingNumberComponent value={300} title={"ÖDÜL"}/>
        </div>

    )
}

export default NumberSection;