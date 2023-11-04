/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { useState, FormEvent } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { IUserRegisterApiResponse } from '../types/User';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const user: IUserRegisterApiResponse = await api
      .post('/login', { email })
      .then((response) => response.data)
      .catch((err) => {
        toast.error('response' in err ? err.response.data : String(err), {
          position: 'top-center',
        });
      });
    localStorage.setItem('id', user.id);
    localStorage.setItem('name', user.name);
    navigate('/event');
    toast.success('Usuário logado com sucesso', {
      position: 'top-center',
      duration: 2000,
    });
  }
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-evenly bg-slate-900">
      <Toaster />
      <form
        onSubmit={(e) => handleLogin(e)}
        className="flex h-80 w-80 flex-col justify-center"
      >
        <div className="w-full">
          <Input
            required
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
