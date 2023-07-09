import { ReactNode } from "react";

type BoxColor = "white" | "blue";
interface IBox {
  title?: string;
  description?: string;
  children?: ReactNode;
  box_color?: BoxColor;
}

const Box: React.FC<IBox> = ({
  title,
  description,
  children,
  box_color = "white",
}) => {
  return (
    <div
      className={
        box_color == "white"
          ? "bg-white p-6 rounded mt-4 w-full"
          : "bg-blue-300 p-6 rounded mt-4 w-full"
      }
    >
      {title && <h1 className="text-2xl text-gray-800">{title}</h1>}
      {description && (
        <h3 className="text-base text-gray-500 mt-6">{description}</h3>
      )}
      {children}
    </div>
  );
};

export default Box;
