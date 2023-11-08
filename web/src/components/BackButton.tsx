/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex w-full flex-row items-center justify-center text-center font-satisfy text-2xl text-slate-50"
      onClick={() => navigate(-1)}
    >
      <div>
        <AiOutlineArrowLeft />
      </div>
      <div className="ml-2">Voltar</div>
      <div className="opacity-0">
        <AiOutlineArrowLeft />
      </div>
    </button>
  );
}
