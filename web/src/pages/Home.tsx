/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */
import {FiChevronsRight} from 'react-icons/fi'
import { Invite } from '../components/Invite';
import { useNavigate } from 'react-router-dom';


export function Home() {

  const navigate =  useNavigate()

  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw] flex-col  items-center justify-evenly bg-slate-950 bg-[url('../assets/images/background.png')] bg-cover bg-center bg-no-repeat">
      <section>
        <Invite/>
      </section>
      <section className="flex  h-[16em] w-[20em] flex-col items-center justify-evenly text-slate-50 sm:h-[10em] sm:w-[40em] sm:justify-between">
        <div id="confirm-presence">
            <button onClick={() =>navigate('/login')} className="0.5s font-amatic flex flex-row items-center rounded-full bg-red-400 p-3 text-2xl font-bold transition-all ease-in-out hover:bg-red-500 sm:p-5 sm:text-3xl">Quero participar<FiChevronsRight/></button>
        </div>
      </section>
    </main>
  );
}
