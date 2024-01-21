import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = (props) => {
  const { label, onChange, value } = props;
  return (
    <div>
      <label htmlFor={props.id}>
        <h3>{label}</h3>
        <input type={props.type} {...props} id={props.id} />
      </label>
    </div>
  );
};

export default Input;
