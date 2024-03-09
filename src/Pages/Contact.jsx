import BigHeader from "../Components/Headers/BigHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

export default function Contact(props) {
    return (
        <div id={props.name} className={"flex justify-center items-center flex-col min-h-dvh pt-28 md:mx-28 gap-14 md:gap-32"}>
            <BigHeader>
                İletişim
            </BigHeader>

            <div className={"flex justify-center items-center w-full flex-col md:flex-row gap-10"}>
                <div className={"md:w-1/2 flex items-center justify-center flex-col gap-10"}>
                    <h2 className={"text-4xl uppercase"}>
                        Adres
                    </h2>
                    <p className={"text-xl flex flex-col text-center md:flex-row gap-4 items-center justify-center"}>
                        <FontAwesomeIcon icon={faLocationDot} size={'2xl'}/>
                        <p>
                            Hacettepe Üniversitesi Beytepe Kampüsü,
                            Tunçalp Özgen Kongre ve Kültür Merkezi
                        </p>
                    </p>
                </div>

                <div className={"md:w-1/2 flex items-center justify-center flex-col gap-10"}>
                    <h2 className={"text-4xl uppercase"}>
                        E-Mail
                    </h2>
                    <p className={"text-xl text-center"}>
                        <FontAwesomeIcon icon={faEnvelope} size={'2xl'}/>
                        <a href="mailto:info@kristalgeyikodulleri.org"
                           className={"ml-4"}>info@kristalgeyikodulleri.org</a>
                    </p>
                </div>
            </div>
            <div className={"flex flex-row items-center justify-center md:justify-between w-full md:mt-auto mb-4 md:pe-20"}>
                <p className={"text-lg hidden md:inline-block"}>
                    Kristal Geyik Ödülleri 2024
                </p>
                <img src="/images/logo.png" alt="kristal geyik odulleri" className={"h-10 md:h-12"}/>
                <p className='text-lg tracking-[.16rem] hidden md:inline-block'>#senin<b>secimin</b></p>
            </div>
        </div>
    )
}