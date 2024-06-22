import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams();
    const params = useParams();
    useEffect(() => { fetchMenu(); }, []);
    const fetchMenu = async () => {
        const data = await fetch((MENU_API + resId));
        const json = await data.json();
        console.log('xxxxx', json)
        setResInfo(json.data);
    };
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, avgRating, costForTwo } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card
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
                    <li key={item.card.info.id}> {item.card.info.name} -
                        Rs: {item.card.info.price / 100} </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;      