/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { LabelHTMLAttributes } from 'react';

export function Label(data: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="mx-4 font-amatic text-2xl text-slate-50"
      {...data}
    ></label>
  );
}
