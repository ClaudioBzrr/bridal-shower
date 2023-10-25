/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Login() {
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-evenly bg-slate-900">
      <form className="flex h-80 w-80 flex-col justify-center">
        <div className="w-full">
          <Input placeholder="Digite seu E-mail / Nome" />
        </div>
        <div className="pt-12">
          <Button primary title="Entrar" />
        </div>
        <div className="pt-12 text-center">
          <a
            href="/register"
            className="text-center font-satisfy text-xl text-slate-50"
          >
            🤨 Não tem um acesso ? Crie um aqui
          </a>
        </div>
      </form>
    </main>
  );
}
