import { useDispatch, useSelector } from "react-redux"
import { AddCart } from "../redux/cartSlice";
import { RootState,ButtonCardProps } from "../redux/type";

const ButtonCard: React.FC<ButtonCardProps>=({id})=>{
   
  const carts = useSelector((state: RootState) => state.carts.items);
  const cartItem = carts.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0; //ถ้าไม่มีค่าให้ใช้ 0 เอาไปกำหนดการแสดงผลของปุ่ม
  console.log(carts);  //เอาผลการเพิ่มการลดออกมาดู

  const dispatch=useDispatch();
  const ClickAddCart=()=>{//กดเพิ่มทีละ 1
    dispatch(AddCart({
      id: id,
      quantity: 1,
    }));
  }
  const ClickDelCart=()=>{//กดลบทีละ 1
    dispatch(AddCart({
      id: id,
      quantity: -1,
    }));
  }
  
    return (
        <div>
            {quantity===0?(
                <button className="text-rose900 border border-rose500 bg-white p-2 px-6 rounded-full flex flex-row items-center justify-center font-semibold w-40" onClick={ClickAddCart}>
                  <img src="/assets/images/icon-add-to-cart.svg"/>
                  <p className="pl-1">Add to Cart</p>
                </button>
            ):(
            <button className="text-rose50 border border-rose500 bg-red p-2 px-6 rounded-full flex flex-row items-center justify-between font-semibold w-40">
              <div className="border border-rose50 w-4 h-4 rounded-full flex items-center justify-center" onClick={ClickDelCart}>
                <img src="/assets/images/icon-decrement-quantity.svg"/>
              </div>
              <p>{quantity}</p>
              <div className="border border-rose50 w-4 h-4 rounded-full flex items-center justify-center" onClick={ClickAddCart}>
                <img src="/assets/images/icon-increment-quantity.svg"/>
              </div>
            </button>)}
        </div>
    )
}
export default ButtonCard
