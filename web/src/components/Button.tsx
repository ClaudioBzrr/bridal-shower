/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import React, { ButtonHTMLAttributes } from 'react';

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: React.JSX.Element;
};

export function Button({ title, icon, ...rest }: IButton) {
  return (
    // <div className="flex w-full flex-row items-center justify-center">
    <button
      className="0.5s flex w-full flex-row items-center rounded-full bg-red-400 p-1 text-center font-amatic text-2xl font-bold transition-all ease-in-out hover:bg-red-500 sm:px-8"
      {...rest}
    >
      {title}
    </button>
    // </div>
  );
}
