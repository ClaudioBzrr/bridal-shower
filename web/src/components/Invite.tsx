/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */
import {BiFork} from 'react-icons/bi'
import {GiSpoon} from 'react-icons/gi'

export function Invite() {
  return (
    <section className="h-[23em] w-[95vw] rounded-full bg-[url('../assets/images/we-1.jpg')] bg-cover bg-center bg-no-repeat text-slate-50 sm:h-[40em] sm:w-[40em] md:h-[72vh] md:w-[40vw]">
      <div
        id="presentation"
        className="flex h-full flex-col items-center justify-evenly text-center backdrop-blur-[3px]"
      >
        <div className='font-amatic flex flex-row items-center justify-center text-3xl font-semibold sm:text-5xl'>
            <BiFork/>
            <h3 className="">
                Chá de cozinha
            </h3>
            <GiSpoon/>
        </div>
        <h1 className="font-satisfy text-5xl font-bold sm:text-8xl">
          Claudio & Nayra
        </h1>
        <div id="message" className="mx-16 sm:ml-24">
          <p className="font-amatic text-left text-2xl font-semibold sm:text-4xl ">
            Queremos compartilhar com vocês a alegria de termos o nosso próprio
            cantinho.
          </p>
          <p className=" font-amatic text-left text-2xl font-semibold sm:text-4xl">
            Com muito amor convidamos você para essa comemoração
          </p>
        </div>
      </div>
    </section>
  );
}
