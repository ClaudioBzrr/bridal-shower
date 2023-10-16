/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */
import {FaLocationDot} from 'react-icons/fa6'

export function Home() {
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw]  flex-col items-center justify-evenly bg-slate-900">
      <section className="h-[23em] w-[95vw] rounded-full bg-[url('../assets/images/we-1.jpg')] bg-cover bg-center bg-no-repeat text-slate-50 sm:h-[40em] sm:w-[40em]">
        <div
          id="presentation"
          className="flex h-full flex-col items-center justify-evenly text-center backdrop-blur-[3px]"
        >
          <h3 className="font-amatic text-3xl font-semibold sm:text-5xl">Chá de cozinha</h3>
          <h1 className="font-satisfy text-5xl font-bold sm:text-8xl">Claudio & Nayra</h1>
          <div id="message" className='mx-16 sm:ml-24'>
            <p className="font-amatic text-left text-2xl font-semibold sm:text-4xl ">
              Queremos compartilhar com vocês a alegria de termos o nosso
              próprio cantinho.
            </p>
            <p className=" font-amatic text-left text-2xl font-semibold sm:text-4xl">
              Com muito amor convidamos você para essa comemoração
            </p>
          </div>
        </div>
      </section>
      <section className="flex  h-[16em] w-[20em] flex-col items-center justify-evenly text-slate-50 sm:h-[10em] sm:w-[40em] sm:justify-between">
        <div id="location" className=" font-satisfy flex flex-col  text-center text-2xl sm:flex-row sm:text-3xl">
          <div >18/11 às 18:00 hrs no </div>
          <div className='sm: ml-2'><a className="flex flex-row text-green-700 underline" target="__blank" href="https://maps.app.goo.gl/GGCJYrEpCwuUN5Kg6"><FaLocationDot/>Floresta Bar</a></div>
        </div>
        <div id="confirm-presence">
            <button className="font-amatic rounded-full bg-red-400 p-3 text-2xl font-bold sm:p-5 sm:text-3xl">Quero participar</button>
        </div>
      </section>
    </main>
  );
}
