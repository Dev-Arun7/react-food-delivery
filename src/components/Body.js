import RestuarentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

let data = [
  {
    info: {
      id: "405798",
      name: "Pizza Hut",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 3.3,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
    },
  },
  {
    info: {
      id: "405795",
      name: "Chinese Work",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
    },
  },
  {
    info: {
      id: "405698",
      name: "Kannur",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 2.8,
      parentId: "61955",
      avgRatingString: "4.8",
      totalRatingsString: "500+",
    },
  },
  {
    info: {
      id: "405718",
      name: "KFC",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "2.5",
      totalRatingsString: "500+",
    },
  },
];

const Body = () => {
  const [listOfRestuarants, setListOfRestaurants] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestuarant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestuarants.length == 0) {
    return (
      <h1>
        {" "}
        <Shimmer />{" "}
      </h1>
    );
  }

  return listOfRestuarants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {" "}
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="search-box"
        ></input>
        <button
          onClick={() => {
            const filteredRestuarant = listOfRestuarants.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );
            setFilteredRestuarant(filteredRestuarant);
          }}
          className="search-btn"
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestuarants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestuarant(filteredList);
          }}
        >
          Top Restaurents{" "}
        </button>{" "}
      </div>

      <div className="res-cotainer">
        {" "}
        {filteredRestuarant.map((restaurent) => (
          <RestuarentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
