import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../slices/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector(getCart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col m-auto w-[800px]">
      <h1 className="mb-10 self-center">
        {cartItems.length > 0
          ? `You have ${cartItems.length} item(s)
        in your cart`
          : "Your cart is empty! Add some deliciousness😋!"}
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="bg-stone-100 p-3 rounded-xl text-sm text-stone-400 ml-3 hover:text-stone-500 transition-all duration-300"
          >
            Clear Cart
          </button>
        )}
      </h1>
      <div>{<ItemList items={cartItems} />}</div>
    </div>
  );
};

export default Cart;
