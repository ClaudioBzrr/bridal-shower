/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useState, FormEvent } from 'react';
import { api } from '../../../services/api';
import toast from 'react-hot-toast';

export function ChooseAmountStep() {
  const [peopleAmount, setPeopleAmount] = useState<number>(0);

  async function handleConfirmPeopleAmoun(e: FormEvent) {
    e.preventDefault();
    const id = localStorage.getItem('id')!;
    await api
      .post('/confirm', {
        authId: id,
        confirmedAttendance: peopleAmount + 1,
      })
      .catch(() =>
        toast.error('Erro ao confirmar quantidade de pessoas', {
          duration: 2000,
        }),
      );
  }

  return (
    <form className="max-w-96">
      <h1 className="text-center font-satisfy text-2xl text-slate-50 sm:text-4xl">
        Quantas pessoas irão com você?
      </h1>
      <div className="mt-8 w-full">
        <Input
          onChange={(e) => setPeopleAmount(e.target.value)}
          value={peopleAmount}
          type="number"
        />
      </div>
      <div className="mt-12">
        <Button title="salvar" primary />
      </div>
    </form>
  );
}
