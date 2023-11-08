/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { useState, FormEvent } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { api } from '../services/api';
import { toast, Toaster } from 'react-hot-toast';
import { IUserRegisterApiResponse } from '../types/User';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  async function handleRegister(event: FormEvent) {
    const duration = 1000;
    event.preventDefault();
    const user: IUserRegisterApiResponse = await api
      .post('/user', { name, email })
      .then((response) => response.data)
      .catch((err) => {
        toast.error('response' in err ? err.response.data : String(err), {
          position: 'top-center',
          duration,
        });
      });
    localStorage.setItem('name', user.name);
    localStorage.setItem('id', user.id);

    toast.success('Usuário criado com sucesso', {
      position: 'top-center',
      duration,
    });
    setTimeout(() => navigate('/event'), duration);
  }
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-center bg-slate-900">
      <Toaster />
      <h1 className="text-center font-satisfy text-2xl text-slate-50 sm:text-4xl">
        Faça o cadastro para prosseguir, é simples e rápido
      </h1>
      <form
        onSubmit={(e) => handleRegister(e)}
        className="mt-12 flex w-full max-w-xs flex-col items-end justify-evenly sm:max-w-sm"
      >
        <div className="w-full">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu E-mail"
          />
        </div>
        <div className="mt-8 w-full">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu Nome"
          />
        </div>
        <div className="mt-12 w-full">
          <Button primary title="Criar" />
        </div>
        <div className="mt-8 w-full">
          <BackButton />
        </div>
      </form>
    </main>
  );
}
