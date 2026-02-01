import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | ReactNode;
}

const Button: FC<ButtonProps> = ({ text, ...props }) => (
  <button {...props}>{text}</button>
);

export default Button;
