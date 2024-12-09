import { useSelector } from "react-redux";
import { useState } from "react";
import OrderConfirmed from "./OrderConfirmed";
import OrderTotal from "./OrderTotal";
import Button from "./Button";
import CartStartNew from "./CartStartNew";
import { RootState } from "../redux/type";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.carts.items);
  const products = useSelector((state: RootState) => state.products.items);

  const [showPopup, setShowPopup] = useState(false); //ทำป๊อปอัพ
  const totalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products[cartItem.id];
    if (product) {
      return total + (cartItem.quantity * product.price);
    }
    return total;
  }, 0);
  
  return (
    <div>
      <div className='bg-white px-6 pb-6 rounded-lg'>
        <p className='text-xl text-red font-bold pt-4'>Your Cart ({totalQuantity})</p>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem) => {
              const product = products[cartItem.id];
              if (product) {
                return (
                  <OrderConfirmed
                    key={cartItem.id}
                    id={cartItem.id}
                    name={product.name}
                    quantity={cartItem.quantity}
                    price={product.price}
                  />
                );
              }
            })}
            <OrderTotal totalPrice={totalPrice}/>
            <div className="flex flex-row justify-center pb-4">
              <div className="flex flex-row justify-center bg-rose50 p-3 rounded-md max-w-80">
                <img className="pr-1" src="/assets/images/icon-carbon-neutral.svg" />
                <p>This is a <strong>carbon-neutral</strong> delivery</p>
              </div>
            </div>
            <div onClick={() => setShowPopup(true)}><Button button={"Confirm Order"}/></div>
          </>
        ) : (
          <div className="text-rose500 flex flex-col items-center justify-center xl:px-8">
              <img src="/assets/images/illustration-empty-cart.svg"/>
              <p className="text-sm text-center">Your added items will appear here</p>
          </div>
        )}
      </div>
      {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-1000">
            <div className="w-full absolute bottom-0 sm:top-0 sm:left-0 sm:flex sm:items-center sm:justify-center">
              <CartStartNew />
            </div>
        </div>
        
        )}
    </div>
  );
};

export default Cart;
