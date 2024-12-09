import ButtonCard from "./ButtonCard"
import React from "react";

interface MenuProductProps {
    id: number;
    name: string;
    price: number;
    category: string;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
  }

const MenuCard: React.FC<MenuProductProps> = ({ id,name, price, category,image })=>{
    return (
        <div className="w-full xl:w-60 flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <picture>
                    <source media="(max-width: 640px)" srcSet={image.mobile}/>
                    <source media="(max-width: 1024px)" srcSet={image.tablet}/>
                    <source media="(min-width: 1025px)" srcSet={image.desktop}/>
                    <img src={image.thumbnail} alt={name} className="w-full h-60  object-cover rounded-md" />
                </picture>
                <div className="absolute pt-60">
                    <ButtonCard id={id}/>
                </div>
            </div>
            <div className="pt-8">
                <p className="text-rose400">{category}</p>
                <p className="text-rose900 font-semibold text-lg truncate">{name}</p>
                <p className="text-red font-semibold text-lg">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};
export default MenuCard