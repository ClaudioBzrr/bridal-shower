/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */
import {FaLocationDot} from 'react-icons/fa6'
import {FiChevronsRight} from 'react-icons/fi'
import { Invite } from '../components/Invite';
import { useNavigate } from 'react-router-dom';


export function Home() {

  const navigate =  useNavigate()

  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw]  flex-col items-center justify-evenly bg-slate-900">
      <section>
        <Invite/>
      </section>
      <section className="flex  h-[16em] w-[20em] flex-col items-center justify-evenly text-slate-50 sm:h-[10em] sm:w-[40em] sm:justify-between">
        <div id="location" className=" font-satisfy flex flex-col  text-center text-2xl sm:flex-row sm:text-3xl">
          <div >18/11 às 18:00 hrs no </div>
          <div className='sm: ml-2'><a className="flex flex-row text-green-700 hover:underline" target="__blank" href="https://maps.app.goo.gl/GGCJYrEpCwuUN5Kg6"><FaLocationDot/>Floresta Bar</a></div>
        </div>
        <div id="confirm-presence">
            <button onClick={() =>navigate('/register')} className="0.5s font-amatic flex flex-row items-center rounded-full bg-red-400 p-3 text-2xl font-bold transition-all ease-in-out hover:bg-red-500 sm:p-5 sm:text-3xl">Quero participar<FiChevronsRight/></button>
        </div>
      </section>
    </main>
  );
}
