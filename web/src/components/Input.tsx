/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import { InputHTMLAttributes } from 'react';

export function Input(data: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...data}
      className="w-[16em] rounded-xl bg-slate-600 p-1 text-center font-amatic text-2xl font-bold text-slate-950"
    />
  );
}
