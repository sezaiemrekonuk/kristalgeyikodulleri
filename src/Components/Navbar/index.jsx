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
import {useNavigate} from "react-router-dom";

// "itemname": "itemid"
const Navbar = ({transparent = false}) => {
    const media = useMedia(1366);
    const [active, setActive] = useState(false);
    const [background, setBackground] = useState('bg-transparent');

    const navigate = useNavigate();

    /*    const onClickScroll = (item) => {
            const element = document.getElementById(item.replace('#', ''));
            element.scrollIntoView({behavior: "smooth"});
        }*/


    return (
        <div
            className={`flex flex-row w-full fixed  h-20 z-40 justify-between items-center px-10 transition-all duration-500 ease-in-out ${transparent ? 'bg-transparent' : 'bg-[#4A0700]'}`}>
            <div className="flex flex-row items-center justify-center hover:cursor-pointer"
                 onClick={() =>
                     navigate('/')
                 }
            >
                <img src={logo} alt="logo" className="h-[35px] md:h-[45px] min-w-[180px]"/>
            </div>
            {!media && (
                <div className="-ml-4">
                    <p className='text-sm tracking-[.16rem]'>#senin<b>secimin</b></p>
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
                                                 onClick={() => {
                                                     navigate(`/${NAVBAR_ITEMS[item].replace('#', '')}`);
                                                     setActive(false);
                                                 }}
                                                 className="flex flex-row items-center hover:cursor-pointer border-b-gray-500 border-b">
                                                <button
                                                    className="tracking-[.12rem] hover:tracking-[.16rem] transition-all text-black"
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
                                        <button
                                            className="tracking-[.12rem] hover:tracking-[.16rem] transition-all text-[12px] 2xl:text-[14px]"
                                            onClick={() => {
                                                navigate(`/${NAVBAR_ITEMS[item].replace('#', '')}`)
                                            }}
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