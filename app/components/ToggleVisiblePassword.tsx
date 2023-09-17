import React from "react";
import UseAnimations from "react-useanimations";
import visibility from "react-useanimations/lib/visibility";

interface ToggleVisiblePasswordProps {
  size: number;
}
const ToggleVisiblePassword: React.FC<ToggleVisiblePasswordProps> = ({
  size,
}) => {
  return <UseAnimations animation={visibility} size={size} />;
};

export default ToggleVisiblePassword;
