/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { AiOutlineCheck } from 'react-icons/ai';
import { IITem } from '../../../types/Item';
import toast, { Toaster } from 'react-hot-toast';
import { api } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../../components/BackButton';

export function PickListStep() {
  const navigate = useNavigate();
  const [items, setItems] = useState<IITem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleSelectItem(item: string) {
    if (selectedItems.find((e) => e == item)) {
      setSelectedItems(selectedItems.filter((f) => f != item));
    } else {
      setSelectedItems([item, ...selectedItems]);
    }
    console.log(selectedItems);
  }

  async function fetchItems() {
    const itemsResponse: IITem[] = await api
      .get('/items')
      .then((response) => response.data)
      .catch((err) => {
        toast.error('response' in err ? err.response.data : String(err), {
          duration: 2000,
        });
      });
    setItems(itemsResponse);
  }

  async function handleSubmitForm() {
    const confirmedAttendance = Number(
      sessionStorage.getItem('confirmedAttendance'),
    );
    const duration: number = 2000;
    await api
      .post('/submit', {
        authId: localStorage.getItem('id')!,
        pickedItems: selectedItems,
        confirmedAttendance,
      })
      .then(() => {
        toast.success('Salvo com sucesso!', { duration });
        localStorage.clear();
        sessionStorage.clear();
        setTimeout(() => navigate('/'), duration);
      })
      .catch((err) =>
        toast.error('response' in err ? err.response.data : String(err), {
          duration: 2000,
        }),
      );
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Toaster />
      <h1 className="font-amatic text-4xl text-slate-50 sm:text-5xl">
        Gostaria de nos presentear com algum item da lista abaixo?
      </h1>
      <div className="w-full">
        <ul className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-12 max-h-80 max-w-full overflow-y-scroll scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600">
          {items.map((e, index) => (
            <li
              onClick={() => handleSelectItem(e.id)}
              key={index}
              className={`cursor-pointer pl-2 font-satisfy text-3xl text-slate-50 ${
                selectedItems.includes(e.id) ? 'rounded-lg bg-slate-950' : ''
              }`}
            >
              {selectedItems.includes(e.id) ? (
                <div className="flex flex-row text-green-900">
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
          <div className="font-sans-serif mt-5 w-full text-right text-sm font-semibold text-slate-200 sm:mt-8">
            {selectedItems.length}{' '}
            {selectedItems.length != 1
              ? 'itens selecionados'
              : 'item selecionado'}
          </div>
        ) : null}
        <div className="mt-4">
          <Button primary title="Finalizar" onClick={handleSubmitForm} />
        </div>
        <div className="mt-2 sm:mt-8">
          <BackButton />
        </div>
      </div>
    </div>
  );
}
