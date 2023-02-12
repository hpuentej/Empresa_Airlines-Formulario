import { Link } from "react-router-dom";
import { Data } from "../../../views/form/childrens";
import { usePassengerStore } from "../../../zustand/formStore";
import { shallow } from "zustand/shallow";

const GetData = () => {
  const { passengers } = usePassengerStore(
    (state) => ({
      passengers: state.passengers,
    }),
    shallow
  )

  const clients: number[] = Array(passengers).fill(0);
  const data = clients.map((_, index) => (
    <div>
      <h1 className="text-3xl flex justify-center mb-10">Pasajero {index + 1}</h1>
      <Data/>
    </div>
  )); 

  return (
    <>
      <div className="flex flex-col">
        {data}
        <button
          className="bg-violet-500 hover:bg-violet-700 p-3 rounded-full text-white text-lg font-semibold mx-5 mb-5"
        >
          <Link to="/confirmation">
            Antes de finalizar revisa los datos ingresados
          </Link>
        </button>
      </div>
    </>
  );
};

export default GetData;
