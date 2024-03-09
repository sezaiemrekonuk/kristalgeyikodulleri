import {ClipLoader} from "react-spinners";
import geyik from "../images/geyiklogo.png";

export default function FullScreenLoader() {
    return (
        <div className={"flex justify-center items-center flex-col gap-32 h-screen w-screen bg-red-950 fixed z-50"}>
            <img src={geyik} alt="" className={"w-52"}/>
            <ClipLoader color={"#ffffff"} loading={true} size={50}/>
        </div>
    )
}