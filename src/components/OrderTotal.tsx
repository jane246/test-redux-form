interface OrderTotalProps {
    totalPrice: number;
  }
  
  const OrderTotal: React.FC<OrderTotalProps> = ({ totalPrice }) => {
    return (
      <div className="text-rose900 flex flex-row justify-between items-center py-4">
        <p>Order Total</p>
        <p className="font-bold text-2xl">${totalPrice.toFixed(2)}</p>
      </div>
    );
  }
  
  export default OrderTotal;
  