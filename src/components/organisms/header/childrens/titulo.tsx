import logoAirlines from "../../../../assets/images/logos/logoAirlines.png"

const Titulo = () => {
  return (
    <div className="flex place-content-between">
      <div className="flex">
        <img
          src={logoAirlines}
          alt="Logo de avión"
          className="w-10 h-10 items-center"
        />
        <h1 className="text-indigo-700 text-3xl font-semibold">
          empresa airlines
        </h1>
      </div>
      <h1 className="text-blue-600 text-2xl">vuelos a destinos únicos</h1>
    </div>
  );
};

export default Titulo;
