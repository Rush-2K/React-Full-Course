import { createContext, useContext } from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);

    if(!ctx) {
        throw new Error('AccordionItem-related components must be wrapped by <Accordion.item>')
    }

    return ctx;
}

export default function AccordionItem({id, className, title, children}) {


    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
        
        )
}