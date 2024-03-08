/* 
    Navigation Bar,

    Sections:
    Duyurular, Hakkında, Topluluklar, Sponsonlarımız, KGÖ'23, Basında Biz, İletişim

    Transparent
*/

import logo from '../../images/logo.png';
import {NAVBAR_ITEMS} from "../../Constants/Navbar";
import useMedia from "../../Hooks/useMedia";

import {BottomSheet} from "react-spring-bottom-sheet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

import 'react-spring-bottom-sheet/dist/style.css'

// "itemname": "itemid"
const Navbar = (props) => {
    const media = useMedia(1366);
    const [active, setActive] = useState(false);
    const [background, setBackground] = useState('bg-transparent');

    const onClickScroll = (item) => {
        const element = document.getElementById(item.replace('#', ''));
        element.scrollIntoView({behavior: "smooth"});
    }

    const getScreenWidth = () => {
        return window.innerWidth;
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                if (scrollY === 0) {
                    setBackground('bg-transparent');
                } else if (scrollY > 0 && scrollY > getScreenWidth() / 2) {
                    setBackground('bg-[#4A0700]');
                }
            }
        )
    }, [])


    return (
        <div
            className={"flex flex-row fixed top-0 left-0 w-full h-20 z-50 justify-between items-center px-10 transition-all duration-500 " + background}>
            <div className="flex flex-row items-center justify-center hover:cursor-pointer"
                 onClick={() => onClickScroll('ana')}>
                <img src={logo} alt="logo" className="h-[60px] min-w-[240px]"/>
            </div>
            {!media && (
                <div className="">
                    <p className='text-lg tracking-[.16rem]'>#senin<b>secimin</b></p>
                </div>
            )}
            {media ? (
                <>
                    <div
                        onClick={() => setActive(true)}
                    >
                        <FontAwesomeIcon icon={active ? faX : faBars} size={'lg'}/>
                    </div>
                    <BottomSheet
                        open={active}
                        onDismiss={() => setActive(false)}
                        snapPoints={({minHeight, maxHeight}) => [minHeight, maxHeight]}
                    >
                        <div className="flex flex-col gap-4 items-center justify-center py-12">
                            {
                                Object.keys(NAVBAR_ITEMS).map((item, index) => {
                                        return (
                                            <div key={index}
                                                 className="flex flex-row items-center hover:cursor-pointer border-b-gray-500 border-b">
                                                <button
                                                    className="tracking-[.12rem] hover:tracking-[.16rem] transition-all text-black"
                                                    onClick={() => onClickScroll(NAVBAR_ITEMS[item])}
                                                >{item}</button>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </BottomSheet>
                </>
            ) : (
                <div className="flex flex-row gap-4">
                    {
                        Object.keys(NAVBAR_ITEMS).map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-row items-center hover:cursor-pointer">
                                        <button className="tracking-[.12rem] hover:tracking-[.16rem] transition-all"
                                                onClick={() => onClickScroll(NAVBAR_ITEMS[item])}
                                        >{item}</button>
                                    </div>
                                )
                            }
                        )
                    }
                </div>)}
        </div>
    )

}

export default Navbar;