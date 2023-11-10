import { useState } from 'react';
import { ChooseAmountStep } from './Steps/ChooseAmountStep';
import { PickListStep } from './Steps/PickListStep';
import { ConfirmStep } from './Steps/ConfirmStep';

export function Event() {
  const [eventconfirm, setEventConfirm] = useState<boolean>(false);
  const [presence, setPresence] = useState<boolean>(false);
  const [amountConfirm, setAmountConfirm] = useState<boolean>(false);

  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col items-center justify-center  bg-slate-950 bg-[url('../assets/images/background_form.png')] bg-cover bg-center bg-no-repeat">
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
