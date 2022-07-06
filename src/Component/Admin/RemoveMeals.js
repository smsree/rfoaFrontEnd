import React,{useState,useEffect} from "react";
import RemoveItem from "./RemoveItem";
const RemoveMeals = props =>{

    const [meals,setMeals]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const fetchMeals=async () => {
            const response = await fetch("http://localhost:8100/meals/all");
            const ressponseData = await response.json();
            console.log(ressponseData);
            setMeals(ressponseData);
            setIsLoading(false);
          };
          fetchMeals();
    },[])

    const mealItems = <ul>{meals.map((m)=><RemoveItem name={m.name} price={m.price} id={m.id}/>)}</ul>
    const loadingMessage=<p>Loading....</p>

    return<div>
        {!isLoading &&  mealItems}
        {isLoading && loadingMessage}
    </div>
}
export default RemoveMeals;