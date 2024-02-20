"use client";
import React from "react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

interface LoadingAnimationProps {
  size: number;
  color?: string;
  fillColor?: string;
  wrapperStyle?: React.CSSProperties;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = (params) => {
  const { size, color = "#def5ff", fillColor, wrapperStyle } = params;
  return (
    <UseAnimations
      animation={loading}
      size={size}
      strokeColor={color}
      fillColor={fillColor}
      wrapperStyle={wrapperStyle}
    />
  );
};

export default LoadingAnimation;
