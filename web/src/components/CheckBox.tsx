import { InputHTMLAttributes } from 'react';

type ICheckBox = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
};

export function CheckBox({ title, ...rest }: ICheckBox) {
  return (
    <div>
      <div>{title}</div>
      <input {...rest} type="checkbox" />
    </div>
  );
}
