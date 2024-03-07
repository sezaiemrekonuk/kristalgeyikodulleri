import './BigHeader.css';

const BigHeader = (props) => {
    return (
        <header className={"flex items-center justify-center mb-10 md:mb-2 custom-border p-3 py-5 w-fit"}>
            <h1 className={"text-4xl uppercase tracking-widest text-center"}>{props.children}</h1>
        </header>
    )
}

export default BigHeader;