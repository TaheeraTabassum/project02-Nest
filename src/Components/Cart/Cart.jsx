import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
  calculateTotal,
} from "../../Redux/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between shadow p-4 rounded-lg bg-white">

            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>${item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => dispatch(decrementQty(item.id))} className="px-3 py-1 bg-gray-200">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQty(item.id))} className="px-3 py-1 bg-gray-200">+</button>
              </div>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 p-4 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-bold">Total: ${totalAmount}</h2>

          <Link to="/checkout">
            <button className="bg-green-600 text-white w-full py-3 mt-4 rounded-lg text-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
