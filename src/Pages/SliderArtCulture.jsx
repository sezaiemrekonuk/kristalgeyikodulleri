import CustomSlider from "../Components/Slider/Slider";
import BigHeader from "../Components/Headers/BigHeader";

export const SliderArtCulture = (props) => {
    return (
        <div id={props.name} className={"flex justify-center flex-col min-h-dvh pt-20 md:mx-28 mx-10"}>
            <div className="mx-auto mb-8 flex flex-col items-center justify-center text-center">
                <BigHeader>
                    KÜLTÜR&SANAT KAZANANLARI'23
                </BigHeader>
                {/*<h2 className={"sponsor-title text-4xl my-2 mt-6"}>Kültür-Sanat Kazananları</h2>*/}
            </div>

            <CustomSlider prefix={"kultursanat"} length={[0,1,2,3,4,5,6,7,8,9,10]}/>
        </div>
    )
}

export default SliderArtCulture;