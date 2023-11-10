/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { ButtonHTMLAttributes } from 'react';

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  primary?: boolean;
  rightElement?: React.JSX.Element;
  leftElement?: React.JSX.Element;
};

export function Button({
  title,
  primary,
  leftElement,
  rightElement,
  ...rest
}: IButton) {
  return (
    // <div className="flex w-full flex-row items-center justify-center">
    <button
      className={`0.5s sm:px-8" w-full rounded-full  p-1 text-center font-amatic text-2xl font-bold transition-all ease-in-out hover:scale-110 ${
        primary == true
          ? 'bg-red-400 hover:bg-red-500 '
          : 'bg-slate-300 hover:bg-slate-400'
      }`}
      {...rest}
    >
      {rightElement ? <div className="pl-1">{rightElement}</div> : null}
      {title}
      {leftElement ? <div className="pr-1">{rightElement}</div> : null}
    </button>
    // </div>
  );
}
