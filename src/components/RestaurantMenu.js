import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import BodyShimmer from "./BodyShimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <BodyShimmer />;

  const {
    name,
    costForTwoMessage,
    avgRating,
    cloudinaryImageId,
    cuisines,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="h-screen  mx-auto w-[900px]">
      <h1 className="m-5 text-2xl font-bold">{name}</h1>

      <div className="border p-5 flex flex-col gap-2 border-stone-200 shadow-xl rounded-3xl">
        <p className="font-medium">
          ⭐{avgRating} &#x2022; {costForTwoMessage}
        </p>
        <span className="text-sm text-amber-950">{cuisines.join(", ")}</span>
        <p className="text-sm border-b py-2">ETA: {sla.deliveryTime} minutes</p>
      </div>

      <div className="p-10 gap-8 flex items-center justify-center flex-col">
        <h1 className="text-xl text-stone-500">Menu</h1>
        <div className="w-[100%] flex flex-col gap-8">
          {categories.map((category, idx) => {
            return (
              <RestaurantCategory
                data={category.card?.card}
                key={category.card?.card?.title}
                showItems={idx === showIndex ? true : false}
                setShowIndex={() => {
                  idx === showIndex ? setShowIndex(null) : setShowIndex(idx);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
