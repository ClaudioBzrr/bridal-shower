/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */

export function Home() {
  return (
    <main className="flex h-[100vh] max-h-[100vh] w-full max-w-[100vw]  flex-col items-center justify-between bg-slate-900">
      <section className="h-[40em] w-[40em] rounded-full bg-[url('../assets/images/we-1.jpg')] bg-cover bg-center bg-no-repeat text-slate-50">
        <div
          id="presentation"
          className="flex h-full flex-col items-center justify-evenly text-center backdrop-blur-[2px]"
        >
          <h3 className="font-amatic text-4xl font-semibold">Chá de cozinha</h3>
          <h1 className="font-satisfy text-7xl font-bold">Claudio & Nayra</h1>
          <div id="message" className='ml-16'>
            <p className="font-amatic text-left text-4xl font-semibold ">
              Queremos compartilhar com vocês a alegria de termos o nosso
              próprio cantinho.
            </p>
            <p className=" font-amatic text-left text-4xl font-semibold">
              Com muito amor convidamos você para essa comemoração
            </p>
          </div>
        </div>
      </section>
      <section className="text-slate-50">

      </section>
    </main>
  );
}
