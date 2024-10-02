import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={style.Button} {...props}>
      {children}
    </button>
  );
};

export default Button;
