import { DeleteAll } from "../redux/cartSlice";
import { useDispatch} from "react-redux"
interface OrderConfirmedProps {
    id: number;
    name: string;
    quantity: number;
    price: number;
}
  
const OrderConfirmed: React.FC<OrderConfirmedProps> = ({ id, name, quantity, price }) => {

    const totalPrice = price * quantity;//สินค้าแต่ละชนิด
    
    const dispatch=useDispatch();
    const ClickDeleteAll=()=>{//กดแล้วลบของชนิดนั้นหมด
        dispatch(DeleteAll({
            id: id,
        }));
    }

    return (
        <div className="flex justify-between items-center gap-8 border-b border-rose100 py-4">
            <div className="truncate">
                <p className="truncate text-lg text-rose900 font-semibold">{name}</p>
                <div className="grid grid-cols-[30px,70px,70px] text-md ">
                    <p className="text-red font-semibold">{quantity}x</p>
                    <p className="text-rose400">@ ${price.toFixed(2)}</p>
                    <p className="text-rose500">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <div>
                <div className="border border-rose400 w-4 h-4 rounded-full flex items-center justify-center" onClick={ClickDeleteAll}>
                    <img src="/assets/images/icon-remove-item.svg"/>
                </div>
            </div>

        </div>
    )
}
export default OrderConfirmed