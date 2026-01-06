import type { ChangeEvent, FC } from "react";

interface InputProps {
  className: string;
  type: string;
  placeholder?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  className,
  type,
  placeholder,
  checked,
}) => (
  <input
    value={value}
    onChange={onChange}
    className={className}
    type={type}
    placeholder={placeholder}
    checked={checked}
  />
);

export default Input;
