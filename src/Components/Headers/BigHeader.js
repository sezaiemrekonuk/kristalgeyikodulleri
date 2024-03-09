import './BigHeader.css';

const BigHeader = (props) => {
    return (
        <header className={"flex items-center justify-center mb-10 md:mb-2 custom-border p-3 md:p-5 py-3 md:py-5 w-fit scale-95 md:scale-100"}>
            <h1 className={"text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest text-center"}>{props.children}</h1>
        </header>
    )
}

export default BigHeader;