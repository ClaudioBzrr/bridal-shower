/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { LabelHTMLAttributes } from 'react';

export type ILabel = LabelHTMLAttributes<HTMLLabelElement> & {
  title: string;
};

export function Label({ title, ...rest }: ILabel) {
  return (
    <label className="mx-4 font-amatic text-2xl text-slate-50" {...rest}>
      {title}
    </label>
  );
}
