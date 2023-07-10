import React, { useState } from "react";
import * as Icon from "@/assets";

type Icon = "UserGroup" | "ShieldCheck";
interface ICard {
  title: { text: string; icon: Icon };
  items: string[];
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
          ? "border-blue-600 border-2 rounded-lg w-full p-4 mt-4"
          : "w-full rounded-lg p-4 border-white border-2 drop-shadow-lg mt-4"
      }
      onClick={handleClick}
    >
      <div
        className={
          "flex flex-col justify-center text-start w-full select-none "
        }
      >
        <div className="flex items-center w-full mb-2">
          {props.title.icon == "UserGroup" ? (
            <Icon.UserGroup stroke="#6B7280" />
          ) : (
            <Icon.ShieldCheck stroke="#6B7280" />
          )}
          <h1 className="text-sm text-blue-600 ml-2">{props.title.text}</h1>
        </div>
        {props.items.map((item, index) => (
          <div key={index} className="flex items-center w-full">
            <Icon.Check stroke="#1C64F2" />
            <h5 className="text-gray-500 text-sm mt-2 ml-2">{item}</h5>
          </div>
        ))}
        <h1 className="text-blue-500 text-xl text-center mt-4">
          {props.footer}
        </h1>
      </div>
    </div>
  );
};

export default Card;
