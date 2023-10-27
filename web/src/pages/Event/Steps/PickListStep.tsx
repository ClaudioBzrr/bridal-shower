/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';
import data from './list-mock.json';
import { Button } from '../../../components/Button';
import { AiOutlineCheck } from 'react-icons/ai';

export function PickListStep() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleSelectItem(item: string) {
    if (selectedItems.find((e) => e == item)) {
      setSelectedItems(selectedItems.filter((f) => f != item));
    } else {
      setSelectedItems([item, ...selectedItems]);
    }
  }
  return (
    <div>
      <h1 className="font-amatic text-4xl text-slate-50 sm:text-5xl">
        Gostaria de nos presentear com algum item da lista abaixo?
      </h1>
      <div className="w-full">
        <ul className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-12 max-h-80 max-w-full overflow-y-scroll scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600">
          {data.map((e, index) => (
            <li
              onClick={() => handleSelectItem(e.name)}
              key={index}
              className={`cursor-pointer pl-2 font-satisfy text-3xl text-slate-50 ${
                selectedItems.includes(e.name) ? 'rounded-lg bg-slate-950' : ''
              }`}
            >
              {selectedItems.includes(e.name) ? (
                <div className="flex flex-row">
                  <AiOutlineCheck />
                  {e.name}
                </div>
              ) : (
                e.name
              )}
            </li>
          ))}
        </ul>
        {selectedItems.length > 0 ? (
          <div className="font-sans-serif mt-10 w-full text-right text-sm font-semibold text-slate-200">
            {selectedItems.length}{' '}
            {selectedItems.length != 1
              ? 'itens selecionados'
              : 'item selecionado'}
          </div>
        ) : null}
        <div className="mt-4">
          <Button primary title="Finalizar" />
        </div>
      </div>
    </div>
  );
}
