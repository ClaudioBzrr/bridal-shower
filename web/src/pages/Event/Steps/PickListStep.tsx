/* eslint-disable tailwindcss/no-custom-classname */
import data from './list-mock.json';

export function PickListStep() {
  return (
    <div>
      <h1 className="font-amatic text-4xl text-slate-50 sm:text-5xl">
        Gostaria de nos presentear com algum item da lista abaixo?
      </h1>
      <div>
        <ul>
          {data.map((e, index) => (
            <li key={index} className="font-satisfy text-3xl text-slate-50">
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
