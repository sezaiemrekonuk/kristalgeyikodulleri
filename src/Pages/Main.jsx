import largeLogo from '../images/logoLarge.png';


export default (props) => {
    return (
        <div className='overflow-hidden w-dvw h-dvh flex justify-center items-center flex-col gap-6' id={props.name}>
            <img src={largeLogo} alt="" className='h-[12rem] md:h-[16rem] lg:h-[20rem]' />
            <p className='text-lg tracking-[.16rem]'>#senin<b>secimin</b></p>
        </div>
    )
}