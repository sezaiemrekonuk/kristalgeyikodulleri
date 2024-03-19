import BigHeader from "../Components/Headers/BigHeader";

import FAQS from "../Constants/FAQS";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import Navbar from "../Components/Navbar";

const FAQ = (props) => {
    return (
        <>
            <Navbar/>
            <div id={props.name} className={"flex justify-center items-center flex-col min-h-dvh pt-24 md:mx-28 mx-10"}>
                <BigHeader>
                    Sıkça Sorulan Sorular
                </BigHeader>

                <Accordion className={"md:w-3/4 flex flex-col items-center justify-center gap-4 mt-6"}
                           allowZeroExpanded>
                    {FAQS.map((faq, key) => (
                        <AccordionItem key={key}
                                       className={"p-3 bg-gray-500 bg-opacity-40 border border-white w-full transition-all rounded-xl duration-500"}
                                       activeClassName={"p-3 bg-gray-800 bg-opacity-90 border-2 border-white w-full font-extrabold text-2xl transition-all rounded duration-500"}>
                            <AccordionItemHeading className={"py-2"}>
                                <AccordionItemButton>
                                    {faq.title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={"px-2"}>
                                <p className={"text-sm font-normal"}>
                                    {faq.content}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    )
}

export default FAQ;