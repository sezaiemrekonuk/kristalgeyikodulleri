import BigHeader from "../Components/Headers/BigHeader";
import CustomSlider from "../Components/Slider/Slider";
import Navbar from "../Components/Navbar";

export const UsOnMedia = (props) => {
    return (
        <>
            <Navbar/>ß
            <div id={props.name} className={"flex justify-center flex-col min-h-dvh pt-20 md:mx-28 mx-10"}>
                <div className="mx-auto mb-8 flex flex-col items-center justify-center text-center">
                    <BigHeader>
                        Medyada BİZ
                    </BigHeader>
                </div>

                <CustomSlider prefix={"medyadabiz"}
                              length={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
                                isJPG
                />
            </div>
        </>
    )
}

export default UsOnMedia;