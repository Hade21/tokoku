"use client";
import UseAnimations from "react-useanimations";
import alertOctagon from "react-useanimations/lib/alertOctagon";

interface AlertAnimationProps {
  size: number;
  fillColor?: string;
  color?: string;
  wrapperStyle?: React.CSSProperties;
}

const AlertAnimation: React.FC<AlertAnimationProps> = (params) => {
  const { size, fillColor, color, wrapperStyle } = params;
  return (
    <UseAnimations
      animation={alertOctagon}
      size={size}
      fillColor={fillColor}
      strokeColor={color}
      wrapperStyle={wrapperStyle}
    />
  );
};

export default AlertAnimation;
