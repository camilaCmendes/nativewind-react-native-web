import React, { useState } from "react";
import { Check } from "@/assets";

interface ICard {
  title: { text: string };
  itens: { text: string }[];
  footer?: string;
  selected?: boolean;
}

const Card: React.FC<ICard> = (props) => {
  const [isSelected, setIsSelected] = useState(props.selected);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={
        isSelected
          ? "border-blue-600 border-2 rounded-lg w-fit p-4"
          : "w-fit rounded-lg p-4 border-white border-2 drop-shadow-lg"
      }
      onClick={handleClick}
    >
      <div
        className={"flex flex-col justify-center text-start w-fit select-none "}
      >
        <h1 className="text-sm text-blue-600 mt-4">{props.title.text}</h1>
        {props.itens.map((item, index) => (
          <h5 key={index} className="text-gray-500 text-sm mt-2">
            {item.text}
          </h5>
        ))}
        <h1 className="text-blue-500 text-xl text-center mt-4">
          {props.footer}
        </h1>
      </div>
    </div>
  );
};

export default Card;
