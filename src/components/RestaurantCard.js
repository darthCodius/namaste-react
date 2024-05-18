const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}⭐</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
