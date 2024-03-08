const SponsorImages = (props) => {
    return (
        <div className={"flex flex-wrap justify-evenly items-center gap-10"}>
            {props.images.map((image, index) => {
                return (
                    <div className={"img-after-border shadow-2xl"} key={index}>
                        <img key={index} src={`/images/sponsorlogos/${props.file}/${image}.png`} alt={image}
                             className={"p-4 bg-white h-[100px] w-[100px] img-after-border"}/>
                    </div>);
            })}
        </div>
    )
}

export default SponsorImages;