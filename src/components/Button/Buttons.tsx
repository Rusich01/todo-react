import type { FC } from "react";

interface ButtonsProps {
  className?: string;
  onClick?: VoidFunction;
  text: string;
}

const Buttons: FC<ButtonsProps> = ({ className, onClick, text }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

export default Buttons;
