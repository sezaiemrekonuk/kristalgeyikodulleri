import BigHeader from "../Components/Headers/BigHeader";
import CustomSlider from "../Components/Slider/Slider";

export const UsOnMedia = (props) => {
    return (
        <div id={props.name} className={"flex justify-center flex-col min-h-dvh pt-20 md:mx-28 mx-10"}>
            <div className="mx-auto mb-8 flex flex-col items-center justify-center text-center">
                <BigHeader>
                    Medyada Biz
                </BigHeader>
            </div>

            <CustomSlider/>
        </div>
    )
}

export default UsOnMedia;