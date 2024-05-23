import { ITEM_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div className="flex flex-col gap-10">
      {items.map((item) => {
        return (
          <div
            className="flex justify-between gap-[6rem] items-center border-b pb-8 last:pb-0 last:border-b-0"
            key={item.card.info.id}
          >
            <div>
              <h1 className="font-medium">{item.card.info.name}</h1>
              <p>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
              {item.card.info.ratings.aggregatedRating.rating ? (
                <p className="text-xs my-3">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating} (
                  {item.card.info.ratings.aggregatedRating.ratingCount})
                </p>
              ) : (
                <p className="text-xs my-3">No Ratings Yet</p>
              )}
              <p className="text-sm text-stone-500">
                {item.card.info.description}
              </p>
            </div>
            {item.card.info.imageId && (
              <div className="shrink-0 relative">
                <img
                  className="w-[150px] h-[160px] rounded-xl "
                  src={`${ITEM_URL}${item.card.info.imageId}`}
                />
                <button className="absolute left-2 py-1 px-4 rounded-lg bottom-1 bg-slate-100 text-yellow-500">
                  Add
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
