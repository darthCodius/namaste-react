import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import BodyShimmer from "./BodyShimmer";

const primaryBtn =
  "bg-amber-300 px-2 py-2 transition-all duration-300 rounded-lg text-amber-950 hover:bg-amber-200 text-sm focus:ring focus:ring-yellow-300 focus:ring-offset-2";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();

    const resData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (obj) => obj.info
      );

    setListOfRestaurants(resData);
    setFilteredRestaurant(resData);
  };

  const handleFilterTopRated = () => {
    setFilteredRestaurant(
      listOfRestaurants.filter((res) => res.avgRating > 4.2)
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline! Please check your internet connection!
      </h1>
    );

  return !listOfRestaurants.length ? (
    <BodyShimmer />
  ) : (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-3">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="border-2 border-solid border-yellow-900 rounded-lg px-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className={primaryBtn}
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.name
                    .toLowerCase()
                    .includes(searchQuery.trim().toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button className={primaryBtn} onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-10">
        {filteredRestaurant.map((res, idx) => (
          <Link className="card-link" to={`/restaurant/${res.id}`} key={res.id}>
            {<RestaurantCard resData={res} key={res.id} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
