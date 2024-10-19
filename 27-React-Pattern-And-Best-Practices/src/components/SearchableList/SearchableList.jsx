import { useState, useRef } from "react"

export default function SearchableList({items, children, itemKeyFn}) {
    const lastChange = useRef();
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

    function handleChange(event) {
        if(lastChange.current) {
            clearTimeout(lastChange.current);   //clear the ongoing timer
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null; //remove the ref identifier
            setSearchTerm(event.target.value);
        }, 500); //store the timer id in the ref
    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange}/>
            <ul>
                {searchResults.map((item, index) => (
                    <li key={itemKeyFn(item)}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    )
}