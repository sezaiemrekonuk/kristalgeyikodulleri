import BigHeader from "../Components/Headers/BigHeader";
import sponsors from "../Constants/Sponsors";
import SponsorImages from "../Components/SponsorImages";

const Sponsors = (props) => {
    return (
        <div id={props.name} className={"flex items-center justify-center min-h-dvh pt-28 flex-col"}>
            <BigHeader>
                KGÖ'23 Sponsorlarımız
            </BigHeader>
            <div className={"flex flex-wrap items-center justify-center"}>
                {sponsors.map((sponsor, index) => {
                    return (
                        <div key={index} className={"p-4 flex flex-col items-center justify-center my-8 mx-28 " +  sponsor.customWidth}>
                            <h2 className={"sponsor-title text-4xl mb-4"}>{sponsor.title}</h2>
                            <SponsorImages images={sponsor.sponsors} file={sponsor.file}/>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default Sponsors;