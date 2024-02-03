import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  placeholder: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = (props) => {
  const { name, onChange, value, placeholder } = props;
  return (
    <div>
      <label htmlFor={props.id} className="relative block w-full p-2">
        <input
          type={props.type}
          {...props}
          id={props.id}
          className="peer w-full rounded-md border border-non-photo-blue p-2 text-base outline-none transition-all duration-200 [appearance:textfield] placeholder:text-transparent focus:border-2 focus:border-royal-blue [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
          {name}
        </p>
      </label>
    </div>
  );
};

export default Input;
