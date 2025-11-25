import type React from "react";
import style from "./Button.module.css";
interface IButtonProps {
  // titre: string;
  color?: string;
  type?: "reset" | "submit" | "button";
  children: React.ReactNode | string | Array<React.ReactElement | string>;
  onButtonClick: () => void;
}
const Button: React.FC<IButtonProps> = ({ type, children, color, onButtonClick }) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: color }}
      className={style.Button}
      onClick={() => {
        onButtonClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
