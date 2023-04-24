import { FC } from "react";

interface InputProps {
  value: string | number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "email" | "password";
}

export function handleChange(
  event: React.ChangeEvent<HTMLInputElement>,
  onChange: (value: any) => void
) {
  onChange(event.target.value);
}

const Input: FC<InputProps> = ({ value, placeholder, onChange, type }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
