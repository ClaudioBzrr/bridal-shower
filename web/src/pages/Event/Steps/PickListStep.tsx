/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import data from './list-mock.json';

export function PickListStep() {
  return (
    <div>
      <h1 className="font-amatic text-4xl text-slate-50 sm:text-5xl">
        Gostaria de nos presentear com algum item da lista abaixo?
      </h1>
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-12 max-h-80 max-w-full overflow-y-scroll scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-slate-800">
        <ul>
          {data.map((e, index) => (
            <li
              key={index}
              className="cursor-pointer font-satisfy text-3xl text-slate-50"
            >
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
