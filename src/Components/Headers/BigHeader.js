const BigHeader = (props) => {
    return (
        <header className={"w-full flex items-center justify-center p-12"}>
            <h1 className={"text-4xl uppercase tracking-widest"}>{props.children}</h1>
        </header>
    )
}

export default BigHeader;