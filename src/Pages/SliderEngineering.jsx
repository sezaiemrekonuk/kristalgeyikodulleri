import CustomSlider from "../Components/Slider/Slider";
import BigHeader from "../Components/Headers/BigHeader";

const SliderEngineering = (props) => {
    return (
        <div id={props.name} className={"flex justify-center flex-col min-h-dvh pt-20 md:mx-28 mx-10"}>
            <div className="mx-auto mb-8 flex flex-col items-center justify-center text-center">
                <BigHeader>
                    KGÖ'23
                </BigHeader>
                <h2 className={"sponsor-title text-4xl my-2 mt-6"}>Mühendislik Kazananları</h2>
            </div>

            <CustomSlider/>
        </div>
    )
}

export default SliderEngineering;