import BigHeader from "../Components/Headers/BigHeader";
import COMMUNITIES_LIST from "../Constants/Communities";
import Navbar from "../Components/Navbar";

const Communities = (props) => {
    return (
        <>
            <Navbar/>
            <div id={props.name}
                 className={"flex justify-center items-center flex-col min-h-dvh px-10 md:px-44 pt-24 gap-y-10 md:gap-y-12 "}>
                <BigHeader>
                    Paydaşlarımız
                </BigHeader>

                <div className={"flex flex-row items-center justify-center gap-4 md:my-12 flex-wrap"}>
                    {COMMUNITIES_LIST.map((community, key) => (
                        <div key={key} className={"p-3 w-[200px] h-[200px] bg-white bg-opacity-90 rounded-2xl shadow-xl hover:bg-opacity-100 hover:scale-110 duration-500 transition-all"}>
                            <img src={`/images/communitylogos/${community.img}`} alt={community.title}
                                className={"w-full h-full object-contain"}
                            />
                        </div>
                    ))}
                </div>
                <p className='text-lg tracking-[.16rem]'>#senin<b>secimin</b></p>
            </div>
        </>
    )
}

export default Communities;