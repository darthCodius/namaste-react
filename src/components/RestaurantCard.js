import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="flex flex-col w-72 transition-all duration-300 hover:-translate-y-1 shadow-xl rounded-xl h-[100%] p-2">
      <img
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="res-logo"
        className="rounded-xl mb-5 h-52"
      />
      <h3>{name}</h3>

      <h5>
        ⭐{avgRating} &#x2022; {sla.deliveryTime} minutes
      </h5>
      <h5>{costForTwo}</h5>
      <p className="text-sm text-slate-700">{cuisines.join(", ")}</p>
    </div>
  );
};

//Higher Order Component -> takes input RestaurantCard and output is enchanced RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
