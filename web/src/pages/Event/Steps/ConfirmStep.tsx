/* eslint-disable tailwindcss/no-custom-classname */
import { FormEvent } from 'react';
import { Button } from '../../../components/Button';
import { IEvent } from '../../../types/Event';

export function ConfirmStep({ onSetStepEvent }: IEvent) {
  function handleSubmitConfirmation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
    onSetStepEvent(true);
  }

  return (
    <form onSubmit={(e) => handleSubmitConfirmation(e)}>
      <h1 className="font-amatic text-4xl text-slate-50 sm:text-5xl">
        Você comparecerá no evento?
      </h1>
      <div className="mt-20 flex flex-row items-center justify-evenly">
        <div className="min-w-[100px]">
          <Button title="Não" />
        </div>
        <div className="min-w-[100px]">
          <Button title="Sim" />
        </div>
      </div>
    </form>
  );
}
