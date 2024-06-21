import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=Enter"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, avgRating, costForTwo } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card
    console.log(itemCards)
    return (
        <div className="menu">
            <h1> {name} </h1>
            <h2> {cuisines.join(", ")} </h2>
            <h3>{avgRating} Stars</h3>
            <h3> Rs {costForTwo / 100}</h3>
            <br />
            <h2> Menu </h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}> {item.card.info.name} - Rs: {item.card.info.price / 100} </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
