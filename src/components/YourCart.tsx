interface OrderConfirmedProps {
    name: string;
    quantity: number;
    price: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
      };
}

const YourCart: React.FC<OrderConfirmedProps>=({name, quantity, price,image })=>{

    const totalPrice = price * quantity;//สินค้าแต่ละชนิด
    
    return (
        <div className="flex justify-between items-center gap-8 border-b border-rose100 py-4">
            <div className="truncate flex flex-row">
                <img className="w-14 h-14 object-cover rounded-md" src={image.thumbnail} />
                <div className="pl-4 truncate">
                    <p className="truncate text-lg text-rose900 font-semibold">{name}</p>
                    <div className="grid grid-cols-[30px,70px] text-md ">
                        <p className="text-red font-semibold">{quantity}x</p>
                        <p className="text-rose400">@ ${price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-lg text-rose900 font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default YourCart
