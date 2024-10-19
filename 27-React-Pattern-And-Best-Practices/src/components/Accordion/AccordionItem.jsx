import { useAccordionContext } from "./Accordion"

export default function AccordionItem({id, className, title, children}) {


    return (
        <li className={className}>
            {children}
        </li>
        )
}