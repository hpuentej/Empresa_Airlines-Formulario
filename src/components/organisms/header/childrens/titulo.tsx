import logoAirlines from "../../../../assets/images/logos/logoAirlines.png";

const Titulo = () => {
  return (
    <div className="flex flex-wrap justify-center sm:place-content-between md:place-content-between">
      <div className="flex flex-none">
        <picture>
          <img
            src={logoAirlines}
            alt="Logo de avión"
            className="w-10 h-10 items-center "
          />
        </picture>
        <div>
          <h1 className="text-indigo-700 text-3xl font-semibold">
            empresa airlines
          </h1>
        </div>
      </div>
      <h1 className="text-slate-600 text-2xl mx-12">Vuelos a lugares únicos</h1>
    </div>
  );
};

export default Titulo;
