"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface BackButtonProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const navigate = useRouter();
  return (
    <div
      className={`cursor-pointer text-3xl transition-transform ease-in-out active:-translate-x-1 ${className}`}
    >
      <BiArrowBack onClick={() => navigate.back()} />
    </div>
  );
};

export default BackButton;
