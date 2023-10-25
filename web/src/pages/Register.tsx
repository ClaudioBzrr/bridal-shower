/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Register() {
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-center bg-slate-900">
      <h1 className="text-center font-satisfy text-2xl text-slate-50 sm:text-4xl">
        Faça o cadastro para prosseguir, é simples e rápido
      </h1>
      <form className="mt-12 flex w-full max-w-xs flex-col items-end justify-evenly sm:max-w-sm">
        <div className="w-full">
          <Input placeholder="Digite seu E-mail" />
        </div>
        <div className="mt-8 w-full">
          <Input placeholder="Digite seu Nome" />
        </div>
        <div className="mt-12 w-full">
          <Button primary title="Criar" />
        </div>
      </form>
    </main>
  );
}
