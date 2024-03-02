const Announcement = (props) => {
    return (<div className="w-full mx-20 md:m-0 md:w-[45rem] lg:w-[38rem]">
            <div className="flex flex-col md:flex-row border-white border-2">
                <div className="md:w-4/5 flex justify-center items-center py-2">
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div
                    className="md:w-1/5 justify-center items-center flex md:border-l border-t py-2 hover:bg-white hover:text-red-500 hover:cursor-pointer transition-all">
                    <button className={"text-center"}>
                        Devamı
                    </button>
                </div>
            </div>
            <p>
                {props.date}
            </p>
        </div>);
}

export default Announcement;