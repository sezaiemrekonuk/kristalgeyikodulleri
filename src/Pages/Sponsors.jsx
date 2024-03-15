import BigHeader from "../Components/Headers/BigHeader";
import sponsors from "../Constants/Sponsors";
import SponsorImages from "../Components/SponsorImages";
import Navbar from "../Components/Navbar";

const Sponsors = (props) => {
    return (
        <>
            <Navbar/>
            <div id={props.name} className={"flex items-center justify-center min-h-dvh pt-28 flex-col"}>
                <BigHeader>
                    Sponsorlarımız'23
                </BigHeader>
                <div className={"flex flex-wrap items-center justify-center"}>
                    {sponsors.map((sponsor, index) => {
                        return (
                            <div key={index}
                                 className={"p-4 flex flex-col items-center justify-center my-8 mx-28 " + sponsor.customWidth}>
                                <h2 className={"sponsor-title text-4xl mb-4"}>{sponsor.title}</h2>
                                <SponsorImages images={sponsor.sponsors} file={sponsor.file}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Sponsors;