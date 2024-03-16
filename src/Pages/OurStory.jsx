import BigHeader from "../Components/Headers/BigHeader";
import awardImage from "../images/award.png";
import Navbar from "../Components/Navbar";

export default function OurStory(props) {
    return (
        <>
            <Navbar/>
            <div className={"flex flex-col items-center justify-center min-h-dvh px-12 lg:px-24 py-24"} id={props.name}>
                <BigHeader>
                    HİKAYEMİZ
                </BigHeader>

                <div className={"flex flex-row w-full items-center justify-center flex-wrap h-full"}>
                    <div className={"overflow-hidden md:overflow-visible md:w-2/5"}>
                        <img src={awardImage} alt="" className={"scale-150"}/>
                    </div>

                    <div
                        className={"mt-4 flex flex-col gap-6 md:w-3/5  items-center justify-center left-border relative px-4"}>
                        <p>
                            Geyikler, doğanın sonsuz döngüsünün kudretli sembolüdür ve boynuzları ise sonsuzluğun,
                            yenilenmenin,
                            yeni başlangıçların ve umudun sembolü olarak kabul edilir. Kristal Geyik Ödülleri, bu
                            sembolizmi
                            zarif bir şekilde yansıtarak insanları büyülü bir törene davet eder.
                        </p>
                        <p>
                            Kristal Geyik Ödülleri, bu eşsiz sembolizmi zarif birer yansıması olarak sunar. Bu ödüller
                            adeta
                            sonsuzluğun kucakladığı bir anın kristalleşmiş hali gibi görünür. Boynuzları gökyüzüne
                            uzanır ve
                            geleceğin umuduyla parıldar. Boynuzların eşsiz kıvrımları yaşamın sürekli yenilenen akışını
                            sembolize eder.
                        </p>
                        <p>
                            Her bir ödül, kristalin içindeki farklı renklerin oyununu anımsatır gibi izleyicileri büyülü
                            bir
                            yolculuğa çıkarır. Kristal Geyik Ödülleri, doğanın ve yaratıcılığın eşsiz birleşimini
                            yansıtarak
                            insanları bu görkemli ve anlamlı etkinliğe katılmaya davet eder. Bu ödüller, geyiklerin
                            doğanın
                            döngüsündeki güçlü sembolünü yansıtarak sanat ve başarının kutlanmasını sağlar, aynı zamanda
                            izleyicilere ilham verip yaratıcılığın zirvesini yaşatır.
                        </p>
                    </div>

                </div>


            </div>
        </>
    )
}

