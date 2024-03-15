import BigHeader from "../Components/Headers/BigHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import Navbar from "../Components/Navbar";

export default function Contact(props) {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <>
            <Navbar/>
            <div id={props.name} className={"flex justify-center items-center flex-col min-h-dvh pt-28 md:mx-28"}>
                <BigHeader>
                    İLETİŞİM
                </BigHeader>

                <div className={"flex flex-col md:flex-row gap-x-10 md:my-auto py-20 gap-y-12"}>
                    <div
                        className={"md:w-1/2 flex items-center justify-center flex-col gap-4 md:gap-10 self-start scale-90 md:scale-100"}>
                        <h2 className={"text-3xl md:text-4xl uppercase font-bold"}>
                            Adres
                        </h2>
                        <p className={"text-xl flex flex-col text-center md:flex-row gap-4 justify-center"}>
                            <FontAwesomeIcon icon={faLocationDot} size={'2xl'}/>
                            <p>
                                Hacettepe Üniversitesi Beytepe Kampüsü,
                                Tunçalp Özgen Kongre ve Kültür Merkezi
                            </p>
                        </p>
                    </div>

                    <div
                        className={"md:w-1/2 flex justify-center flex-col gap-4 md:gap-10 self-start mx-auto scale-90 md:scale-100"}>
                        <h2 className={"text-3xl md:text-4xl uppercase text-center font-bold"}>
                            E-Mail
                        </h2>
                        <p className={"text-xl flex flex-col text-center md:flex-row gap-4 justify-center"}>
                            <FontAwesomeIcon icon={faEnvelope} size={'2xl'}/>
                            <a href="mailto:info@kristalgeyikodulleri.org"
                               className={"ml-4"}>info@kristalgeyikodulleri.org</a>
                        </p>
                    </div>
                </div>


                <div className={"w-screen h-[250px] pb-8"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2592.4938685303055!2d32.73161239922785!3d39.88059612504008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUyJzUxLjQiTiAzMsKwNDQnMDIuNyJF!5e0!3m2!1str!2str!4v1710327453612!5m2!1str!2str"
                        allowFullScreen="" loading="lazy"
                        height={"100%"}
                        width={"100%"}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div
                    className={"flex flex-row items-center justify-center md:justify-between w-full md:mt-auto mb-4 md:pe-20"}>
                    <p className={"text-lg hidden md:inline-block"}>
                        Kristal Geyik Ödülleri 2024
                    </p>
                    <img src="/images/logo.png" alt="kristal geyik odulleri" className={"h-10 md:h-12"}/>
                    <p className='text-lg tracking-[.16rem] hidden md:inline-block'>#senin<b>secimin</b></p>
                </div>
            </div>
        </>
    )
}