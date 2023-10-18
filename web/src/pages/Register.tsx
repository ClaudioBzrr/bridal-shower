/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Label } from '../components/Label';

export function Register() {
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-evenly bg-slate-900">
      <h1 className="text-center font-satisfy text-4xl text-slate-50">
        Faça o cadastro para prosseguir, é simples e rápido
      </h1>
      <form className="mx-16 flex w-auto flex-col items-end justify-center rounded-xl border-[1px] border-dashed border-slate-50 p-20">
        <div className="flex flex-row items-end justify-end">
          <Label htmlFor="name">Nome : </Label>
          <Input id="name" />
        </div>
        <div className="mt-4 flex flex-row items-end justify-end pt-2">
          <Label htmlFor="email">E-mail : </Label>
          <Input id="email" />
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center">
          <Button title="Cadastrar" />
        </div>
      </form>
    </main>
  );
}
