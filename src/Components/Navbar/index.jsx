/* 
    Navigation Bar,

    Sections:
    Duyurular, Hakkında, Topluluklar, Sponsonlarımız, KGÖ'23, Basında Biz, İletişim

    Transparent
*/

import logo from '../../images/logo.png';
import {NAVBAR_ITEMS} from "../../Constants/Navbar";
// "itemname": "itemid"
const Navbar = (props) => {

    return (
        <div
            className="flex flex-row fixed top-0 left-0 w-full h-20 bg-transparent z-50 justify-between items-center px-10">
            <div className="flex flex-row items-center justify-center">
                <img src={logo} alt="logo" className="h-14"/>
            </div>
            <div className="">
                <p className='text-lg tracking-[.16rem]'>#senin<b>secimin</b></p>

            </div>
            <div className="flex flex-row gap-4">
                {
                    Object.keys(NAVBAR_ITEMS).map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row items-center hover:cursor-pointer">
                                <a href={NAVBAR_ITEMS[item]} className="tracking-[.12rem] hover:tracking-[.16rem] transition-all">{item}</a>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )

}

export default Navbar;