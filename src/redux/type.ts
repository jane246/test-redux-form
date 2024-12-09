export interface ProductItem {
    id: number;
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

export interface Product {
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
  
export interface Product {
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

export interface ButtonCardProps {
    id: number;
}
  
export interface CartItem {
    id: number;
    quantity: number;
}
  
export interface RootState {
    products: {
        items: ProductItem[];
    };
    carts: {
        items: ProductItem[];
    };
    product: {
        items: Product[];
    };
    cart: {
        items: CartItem[];
    };
}
  