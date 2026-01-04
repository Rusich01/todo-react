import type { FC } from "react";

interface InputProps {
  className: string;
  type: string;
  placeholder?: string;
  checked?: boolean;
}

const Input: FC<InputProps> = ({ className, type, placeholder, checked }) => (
  <input
    className={className}
    type={type}
    placeholder={placeholder}
    checked={checked}
  />
);

export default Input;
