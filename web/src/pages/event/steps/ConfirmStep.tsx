/* eslint-disable tailwindcss/no-custom-classname */
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button';
import { IEvent } from '../../../types/Event';

export function ConfirmStep({ onSetStepEvent }: IEvent) {
  const [confirmed, setConfirmed] = useState<boolean>(false);

  async function handleSubmitConfirmation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
    // await api.post('/event');
    onSetStepEvent({ nextStep: true, confirmation: confirmed });
  }

  return (
    <form onSubmit={(e) => handleSubmitConfirmation(e)}>
      <h1 className="font-amatic text-4xl text-slate-50 sm:text-5xl">
        Você comparecerá no evento?
      </h1>
      <div className="mt-20 flex flex-row items-center justify-evenly">
        <div className="min-w-[100px]">
          <Button
            title="Não"
            onClick={() => {
              setConfirmed(false);
              sessionStorage.setItem('confirmedAttendance', String(0));
            }}
          />
        </div>
        <div className="min-w-[100px]">
          <Button primary title="Sim" onClick={() => setConfirmed(true)} />
        </div>
      </div>
    </form>
  );
}
