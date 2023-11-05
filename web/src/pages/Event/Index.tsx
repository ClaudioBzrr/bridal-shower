import { useState } from 'react';
import { PickListStep } from './Steps/PickListStep';
import { ConfirmStep } from './Steps/ConfirmStep';
import { ChooseAmountStep } from './Steps/ChooseAmountStep';

export function Event() {
  const [eventconfirm, setEventConfirm] = useState<boolean>(false);
  const [presence, setPresence] = useState<boolean>(false);
  const [amountConfirm, setAmountConfirm] = useState<boolean>(false);

  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-center bg-slate-900">
      <div className="max-w-xs sm:max-w-md">
        {eventconfirm == true ? (
          presence == true && amountConfirm == false ? (
            <ChooseAmountStep onChooseAmount={(e) => setAmountConfirm(e)} />
          ) : (
            <PickListStep />
          )
        ) : (
          <ConfirmStep
            onSetStepEvent={({ nextStep, confirmation }) => {
              setPresence(confirmation);
              setEventConfirm(nextStep);
            }}
          />
        )}
      </div>
    </main>
  );
}
