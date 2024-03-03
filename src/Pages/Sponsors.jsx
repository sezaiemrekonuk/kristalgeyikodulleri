import BigHeader from "../Components/Headers/BigHeader";

const Sponsors = (props) => {
    return (
        <div id={props.name} className={"flex items-center justify-center flex-col min-h-dvh"}>
            <BigHeader>
                Sponsorlar
            </BigHeader>


        </div>
    );
}

export default Sponsors;