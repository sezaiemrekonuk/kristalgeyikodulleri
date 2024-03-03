import BigHeader from "../Components/Headers/BigHeader";
import sponsors from "../Constants/Sponsors";
import SponsorImages from "../Components/SponsorImages";

const Sponsors = (props) => {
    return (
        <div id={props.name} className={"flex items-center justify-center flex-col min-h-dvh pt-20"}>
            <BigHeader>
                Sponsorlar
            </BigHeader>
                {sponsors.map((sponsor, index) => {
                    return (
                        <div key={index} className={"w-11/12 md:w-3/4 p-4 flex flex-col items-center justify-center my-8"}>
                            <h2 className={"sponsor-title text-4xl mb-4"}>{sponsor.title}</h2>
                            <SponsorImages images={sponsor.sponsors} file={sponsor.file}/>
                        </div>
                    );
                })}
        </div>

    );
}

export default Sponsors;