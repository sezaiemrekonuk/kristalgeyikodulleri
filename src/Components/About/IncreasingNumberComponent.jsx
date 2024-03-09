import Number from "../../Loaders/Number";

const IncreasingNumberComponent = (props) => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Number value={props.value} className={"text-2xl font-extrabold text-rose-800 tracking-tight"}/>
            <h2
                className={"text-2xl font-normal text-black"}>
            {props.title}</h2>
        </div>
    )
}

export default IncreasingNumberComponent;