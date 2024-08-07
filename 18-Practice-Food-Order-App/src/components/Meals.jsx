import { useEffect, useState } from "react";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:5173/meals');
    
            if(!response.ok){
                //...
            }
        
            const meals = await response.json();
            console.log(meals)
            setLoadedMeals(meals);
        }
        fetchMeals();
    }, []);

    
    return (
        <ul id="meals">
            {loadedMeals.map(meal => (
                <li key={meal.id}>{meal.name}</li>
            ))}
        </ul>
    )
}