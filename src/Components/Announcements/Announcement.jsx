import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from "react";
import useMedia from "../../Hooks/useMedia";

const Announcement = (props) => {
    const media = useMedia(768);
    console.log(media)

    const announcementBannerNotFound = (
        <div className="w-2/5 h-auto flex items-center justify-center">
            <img src="/images/announcements/notfound.png" alt={props.announcement.title}
                 className={"object-cover w-full h-full"}/>
        </div>
)

    const announcementBannerVideo = (
        <div className="w-2/5 h-auto flex items-center justify-center">
            <video className="w-full h-full" autoPlay>
                <source src={props.announcement.postImage} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )

    const announcementBannerImage = (
        <div className="w-2/5 h-auto flex items-center justify-center">
            <img src={props.announcement.postImage} alt={props.announcement.title}
                 className={"object-cover w-full h-full"}/>
        </div>
    )

    const announcementBanner = props.announcement.postImage ? props.announcement.postImage.includes("mp4") ? announcementBannerVideo : announcementBannerImage : announcementBannerNotFound;


    return (
        <div className="w-full mx-20 md:m-0 md:w-[45rem] lg:w-[38rem]">

            <div className="flex flex-col md:flex-row border-white border-2 min-h-[5rem]">
                <div className="md:w-4/5 flex justify-center items-center p-2">
                    <h3 className={"text-center text-2xl font-bold"}>
                        {props.announcement.title}
                    </h3>
                </div>

                <Popup
                    trigger={
                        <div
                            className="md:w-1/5 justify-center items-center flex md:border-l border-t py-2 hover:bg-white hover:text-red-500 hover:cursor-pointer transition-all">
                            <button className={"text-center"}>
                                Devamı
                            </button>
                        </div>
                    } position="center" modal>
                    {close => (
                        <div className="relative flex flex-col items-center justify-center gap-4 z-50 w-full">
                            <button
                                className="flex items-center justify-center text-black absolute -top-4 -right-4 bg-white text-4xl w-8 h-8 border-2 border-black rounded-full"
                                onClick={close}>
                                &times;
                            </button>
                            <div id="content"
                                 className={"flex flex-col items-center justify-center gap-4 overflow-scroll"}>
                                <div
                                    className={"text-black text-2xl font-bold italic border-b border-black py-2 pb-3 w-11/12 text-center"}>
                                    {props.announcement.title}
                                </div>
                                    {announcementBanner}
                                <div className="text-black-anc text-lg p-4 gap-1 flex flex-col text-center"
                                     dangerouslySetInnerHTML={{__html: props.announcement.content}}/>
                                <div className={"text-black-anc text-center"}>
                                    <p>Ayrıntılı bilgi için <a href={props.announcement.redirect} target="_blank"
                                                               rel="noreferrer"
                                                               className={"cursor-pointer text-cyan-500 hover:text-cyan-700 text-lg italic"}>tıklayınız!</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>

            </div>
            <p>
                {new Date(props.announcement.postDate).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </p>
        </div>);
}

export default Announcement;