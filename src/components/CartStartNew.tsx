import { useSelector } from "react-redux";
import OrderTotal from "./OrderTotal";
import Button from "./Button";
import YourCart from "./YourCart";
import { RootState } from "../redux/type";

const CartStartNew = () => {
  const cartItems = useSelector((state: RootState) => state.carts.items);
  const products = useSelector((state: RootState) => state.products.items);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products[cartItem.id];
    if (product) {
      return total + (cartItem.quantity * product.price);
    }
    return total;
    }, 0);
  
  return (
    <div className='bg-white p-6 rounded-t-xl sm:rounded-xl'>
          <img src="/assets/images/icon-order-confirmed.svg" className='w-10'/>
          <p className='text-3xl text-rose900 font-bold pt-4'>Order Confirmed</p>
          <p className='text-md text-rose400 pb-4'>We hope you enjoy your food!</p>
          <div className='bg-rose50 p-2 rounded-lg mb-8'>
            <div className='max-h-[250px] overflow-y-auto'>
                {cartItems.map((cartItem) => {
                    const product = products[cartItem.id];
                    if (product) {
                        return (
                            <YourCart
                                key={cartItem.id}
                                name={product.name}
                                image={product.image}
                                quantity={cartItem.quantity}
                                price={product.price}
                            />
                        );
                    }
                })}
            </div>
            <OrderTotal totalPrice={totalPrice}/>
          </div>
          <div onClick={() => window.location.reload()}>
            <Button button={"Start New Order"}/>
          </div>
        </div>
  );
};

export default CartStartNew;
