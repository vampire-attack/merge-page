import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ className, children, ...props }: ButtonType) => {
  return (
    <button
      className={`w-full px-2 py-[6px] uppercase bg-red-light rounded-[5px] text-black text-sm font-extrabold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
