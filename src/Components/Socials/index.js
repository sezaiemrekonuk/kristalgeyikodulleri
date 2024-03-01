/*
    This is an fixed element to right middle of the screen, each icon has some padding and half transparent red background
 */

import {SOCIALS} from "../../Constants/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faInstagram, faXTwitter, faYoutube, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import useMedia from "../../Hooks/useMedia";

const Socials = () => {
    const media = useMedia();

    if (media) return null;

    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col gap-3">
                {
                    Object.keys(SOCIALS).map((key, index) => {
                        return (
                            <a href={SOCIALS[key].link} target="_blank" rel="noreferrer" key={index}>
                                <div className="bg-red-500 bg-opacity-25 p-3 flex justify-center items-center hover:bg-opacity-80 transition-all duration-300">
                                    <FontAwesomeIcon icon={
                                        key === "instagram" ? faInstagram :
                                            key === "twitter" ? faXTwitter :
                                                key === "youtube" ? faYoutube :
                                                    key === "facebook" ? faFacebook :
                                                        key === "linkedin" ? faLinkedin : faInstagram
                                    } size="2x"/>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Socials;