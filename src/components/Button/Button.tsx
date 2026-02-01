import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonsProps {
  className?: string;
  onClick?: VoidFunction;

  text: string | ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button: FC<ButtonsProps> = ({ className, onClick, text, type }) => (
  <button className={className} onClick={onClick} type={type}>
    {text}
  </button>
);

export default Button;
