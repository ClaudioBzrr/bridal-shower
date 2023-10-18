/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import React, { ButtonHTMLAttributes } from 'react';

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  rightElement?: React.JSX.Element;
  leftElement?: React.JSX.Element;
};

export function Button({ title, leftElement, rightElement, ...rest }: IButton) {
  return (
    // <div className="flex w-full flex-row items-center justify-center">
    <button
      className="0.5s w-full rounded-full bg-red-400 p-1 text-center font-amatic text-2xl font-bold transition-all ease-in-out hover:bg-red-500 sm:px-8"
      {...rest}
    >
      {rightElement ? <div className="pl-1">{rightElement}</div> : null}
      {title}
      {leftElement ? <div className="pr-1">{rightElement}</div> : null}
    </button>
    // </div>
  );
}
