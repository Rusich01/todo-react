import type { ChangeEvent, FC } from "react";

interface InputProps {
  className: string;
  type: string;
  placeholder?: string;
  checked?: boolean;
  value?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  className,
  type,
  placeholder,
  checked,
  onKeyDown,
}) => (
  <input
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className={className}
    type={type}
    placeholder={placeholder}
    checked={checked}
  />
);

export default Input;
