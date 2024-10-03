import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.scss";
import classNames from "classnames";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disable?: boolean;
}
const Button = ({ children, disable, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames({ [style.hideButton]: disable }, style.Button)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
