import BigHeader from "../Components/Headers/BigHeader";
import COMMUNITIES_LIST from "../Constants/Communities";

const Communities = (props) => {
    return (
        <div id={props.name} className={"flex justify-center items-center flex-col min-h-dvh pt-20 md:mx-28 mx-10 gap-y-10 md:gap-y-32"}>
            <BigHeader>
                Paydaşlarımız
            </BigHeader>

            <div className={"flex flex-row items-center justify-center gap-4 md:my-12 flex-wrap border p-12 bg-white bg-opacity-70"}>
                {COMMUNITIES_LIST.map((community, key) => (
                    <div key={key} className={"p-3 w-28"}>
                        <img src={`/images/communitylogos/${community.img}`} alt={community.title}/>
                    </div>
                ))}
            </div>
            <p className='text-lg tracking-[.16rem]'>#senin<b>secimin</b></p>
        </div>
        )
}

export default Communities;