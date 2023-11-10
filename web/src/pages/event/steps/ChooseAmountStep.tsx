/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useState, FormEvent } from 'react';

interface IChoooseAmountStep {
  onChooseAmount: (e: boolean) => void;
}

export function ChooseAmountStep({ onChooseAmount }: IChoooseAmountStep) {
  const [peopleAmount, setPeopleAmount] = useState<number>(0);

  async function handleConfirmPeopleAmount(e: FormEvent) {
    e.preventDefault();
    sessionStorage.setItem('confirmedAttendance', peopleAmount.toString());
    onChooseAmount(true);
  }

  return (
    <form onSubmit={(e) => handleConfirmPeopleAmount(e)} className="max-w-96">
      <h1 className="text-center font-satisfy text-2xl text-slate-50 sm:text-4xl">
        Quantas pessoas irão com você?
      </h1>
      <div className="mt-8 w-full">
        <Input
          onChange={(e) => setPeopleAmount(Number(e.target.value))}
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
