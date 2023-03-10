import { Link } from "react-router-dom";
import {Passenger, Passengers} from "../../../assets/images/icons";
import { Count } from "../../../views"
import { usePassengerStore } from "../../../zustand/formStore";
import { shallow } from "zustand/shallow";

const ToBuyTicket = () => {
  const { count } = usePassengerStore((state) => ({
    count: state.count,
  }), shallow);

  const toggle = usePassengerStore((state) => state.toggle)  

  return (
    <>
      <section className="bg-violet-300 py-10 mb-4">
        <div className="container overflow-hidden flex flex-col text-3xl text-center bg-indigo-800 py-16 mx-auto rounded-lg justify-around">
          <h1 className="mb-4 text-white">Tour Especial</h1>
          <div className="flex flex-col sm:flex sm:flex-row  sm:justify-evenly">
            <h1 className="text-slate-400 items-center mb-6 sm:mb-6 md:mx-4 md:my-4 sm:self-center">
              Destinos: Venezuela, Ucrania y Perú
            </h1>
            <div className="bg-slate-300 border-4 border-slate-300 hover:border-white rounded-3xl sm:self-center
             mb-5 mx-10 md:mx-12 md:my-3 sm:py-2 sm:px-2 sm:mr-3">
              <button className="py-3 text-slate-400 hover:text-slate-800" onClick={toggle}>
                PASSENGERS
              </button>
              <Count/>
              <div className="flex justify-evenly">
                {count === 1 ? <Passenger /> : <Passengers />}
                <h1 className="text-2xl">
                  {count} {count === 1 ? "Persona" : "Personas"}
                </h1>
              </div>
            </div>
            <button className="font-semibold bg-red-500 hover:bg-red-600 rounded-3xl text-white py-6 mx-32 sm:px-6 sm:mx-5 md:mx-5 md:px-6">
              <Link to="../../form">Register</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToBuyTicket;
