import BigHeader from "../Components/Headers/BigHeader";
import {paddingSize, verticalPaddingSize} from "../Constants/Pagepadding";
import {ANNOUNCEMENTS} from "../Constants/Announcements";
import Announcement from "../Components/Announcements/Announcement";

const Announcements = (props) => {
    return (
        <div id={props.name} className={'flex items-center justify-center flex-col min-h-dvh md:gap-y-16 lg:px-24 p-4'}>
            <BigHeader>
                Duyurular
            </BigHeader>
            <div className="flex flex-wrap gap-12 items-center justify-center">
                {ANNOUNCEMENTS.map((announcement, index) => {
                    return (
                        <Announcement key={index} title={announcement.title} content={announcement.content} date={"15.12.2024"}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Announcements;