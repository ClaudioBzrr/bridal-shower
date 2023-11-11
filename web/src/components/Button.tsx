/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { ButtonHTMLAttributes } from 'react';
import { ImSpinner8 } from 'react-icons/im';

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  title: string;
  primary?: boolean;
  rightElement?: React.JSX.Element;
  leftElement?: React.JSX.Element;
};

export function Button({
  loading,
  title,
  primary,
  leftElement,
  rightElement,
  ...rest
}: IButton) {
  return (
    // <div className="flex w-full flex-row items-center justify-center">
    <button
      disabled={loading}
      className={`0.5s sm:px-8" w-full rounded-full  p-1 text-center font-amatic text-2xl font-bold transition-all ease-in-out hover:scale-110 ${
        primary == true
          ? 'bg-red-400 hover:bg-red-500 '
          : 'bg-slate-300 hover:bg-slate-400'
      }`}
      {...rest}
    >
      {rightElement ? <div className="pl-1">{rightElement}</div> : null}
      {loading == true ? (
        <div className="flex flex-row items-center justify-center">
          <div className="mr-4 animate-spin">
            <ImSpinner8 />
          </div>
          Carregando...
        </div>
      ) : (
        title
      )}
      {leftElement ? <div className="pr-1">{rightElement}</div> : null}
    </button>
    // </div>
  );
}
