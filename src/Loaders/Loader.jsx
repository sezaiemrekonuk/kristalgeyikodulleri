import {ClipLoader} from "react-spinners";

const Loader = () => {
    return (
        <div className={"flex items-center justify-center w-dvw h-dvh"}>
            <ClipLoader color={"#fff"} loading={true} size={200}/>
        </div>
    )
}

export default Loader;