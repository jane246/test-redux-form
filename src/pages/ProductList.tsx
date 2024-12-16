import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchProduct } from "../redux/productSlice.ts";
import MenuCard from '../components/MenuCard.js'
import Cart from "../components/Cart.tsx";

interface Product {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface RootState {
  products: {
    items: Product[];
  };
}

export default function ProductList() {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className='bg-rose50 px-6 pb-6 sm:pt-8 flex gap-8 flex-col 2md:flex-row justify-center'>
      <div>
        <p className="text-4xl text-rose900 font-bold py-6 sm:pt-0">Desserts</p><button>Add</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((element,index) => (
            <MenuCard key={index} id={index} {...element}/>//ใส่ข้อมูลของสินค้าลงไป แล้วเอาตำแหน่งของสินค้าเป็น id
          ))}
        </div>
      </div>

      <div className='w-full md:w-2/5 lg:w-1/4 xl:max-w-1/6'>
        <Cart/>
      </div>

    </div>
  );
}
