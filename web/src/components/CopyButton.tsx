/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */

import { useState } from 'react';

type IButton = {
  text: string;
  primary?: boolean;
  rightElement?: React.JSX.Element;
  leftElement?: React.JSX.Element;
};

export function CopyButton({
  primary,
  leftElement,
  rightElement,
  text,
}: IButton) {
  const [onCopy, setOnCopy] = useState<boolean>(false);
  async function copyText(text: string) {
    setOnCopy(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setOnCopy(false), 2000);
  }

  return (
    <button
      onClick={() => copyText(text)}
      className={`0.5s w-full rounded-full text-center font-amatic text-lg font-bold transition-all ease-in-out hover:scale-110 sm:text-2xl ${
        primary == true
          ? 'bg-red-400 hover:bg-red-500 '
          : 'bg-slate-300 hover:bg-slate-400'
      }`}
    >
      {rightElement ? <div className="pl-1">{rightElement}</div> : null}
      {onCopy == true ? '✔ Copiado!' : 'Copiar'}
      {leftElement ? <div className="pr-1">{rightElement}</div> : null}
    </button>
  );
}
