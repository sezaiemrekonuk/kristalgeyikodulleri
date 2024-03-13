import CustomSlider from "../Components/Slider/Slider";
import BigHeader from "../Components/Headers/BigHeader";

export const SliderManagement = (props) => {
    return (
        <div id={props.name} className={"flex justify-center flex-col min-h-dvh pt-20 md:mx-28 mx-10"}>
            <div className="mx-auto mb-8 flex flex-col items-center justify-center text-center">
                <BigHeader>
                    YÖNETİM-FİNANS KAZANANLARI'23
                </BigHeader>
            </div>

            <CustomSlider/>
        </div>
    )
}

export default SliderManagement;