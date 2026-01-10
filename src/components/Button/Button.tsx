import type { FC, ReactNode } from "react";

interface ButtonsProps {
  className?: string;
  onClick?: VoidFunction;

  text: string | ReactNode;
}

const Button: FC<ButtonsProps> = ({ className, onClick, text }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

export default Button;
