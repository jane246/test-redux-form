import React from "react";

interface ButtonProps {
  button: string;
}

const Button: React.FC<ButtonProps> = ({ button }) => {
  return (
    <div>
      <button className="bg-red text-rose50 p-3 w-full rounded-full hover:bg-orange-800">{button}</button>
    </div>
  );
};

export default Button;
