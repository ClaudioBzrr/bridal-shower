import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Label } from '../components/Label';

export function Login() {
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw]  flex-col items-center justify-evenly bg-slate-900">
      <form className="mx-16 w-auto rounded-xl border-[1px] border-dashed border-slate-50 p-10">
        <div className="flex flex-row items-end justify-end">
          <Label htmlFor="name">Nome : </Label>
          <Input id="name" />
        </div>
        <div className="mt-4 flex flex-row items-end justify-end">
          <Label htmlFor="email">E-mail : </Label>
          <Input id="email" />
        </div>
        <div className="mt-4 flex w-full flex-col items-center justify-center">
          <a className="w-full p-1 text-right text-green-700">
            Já tem uma conta? entre
          </a>
          <Button title="Criar" />
        </div>
      </form>
    </main>
  );
}
