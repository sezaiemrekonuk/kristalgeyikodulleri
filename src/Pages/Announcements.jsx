import BigHeader from "../Components/Headers/BigHeader";
import {paddingSize, verticalPaddingSize} from "../Constants/Pagepadding";
import {ANNOUNCEMENTS} from "../Constants/Announcements";
import Announcement from "../Components/Announcements/Announcement";
import Navbar from "../Components/Navbar";

const Announcements = (props) => {
    return (
        <>
            <Navbar/>
            <div id={props.name} ref={props.ref}
                 className={'flex items-center justify-center flex-col min-h-dvh md:gap-y-16 lg:px-24 pt-24 md:pt-24 p-4'}>
                <BigHeader>
                    Duyurular
                </BigHeader>
                <div className="flex flex-wrap gap-12 items-center justify-center">
                    {ANNOUNCEMENTS.sort((a, b) => new Date(b.postDate) - new Date(a.postDate)).map((announcement, index) => {
                        return (
                            <Announcement key={index} announcement={announcement}/>
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default Announcements;