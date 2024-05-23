import { BsArrowDownShort } from "react-icons/bs";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleShowHide = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="flex flex-col gap-7 shadow-xl p-6 rounded-xl">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={handleShowHide}
        >
          <span className="text-lg font-medium">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>
            <BsArrowDownShort />
          </span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
