import { useState } from "react";
import { Link } from "react-router-dom";
import Passenger from "../../../assets/images/icons/passenger";
import Passengers from "../../../assets/images/icons/passengers";

const ToBuyTicket = () => {
  const [passengers, setPassengers] = useState(1);

  return (
    <>
      <section className="bg-violet-300 py-10 mb-4">
        <div className="container flex flex-col text-3xl text-center bg-indigo-800 py-16 mx-auto rounded-lg justify-around">
          <h1 className="mb-12 text-white">Tour Especial</h1>
          <div className="sm:flex sm:justify-evenly">
            <h1 className="flex text-slate-400 items-center mx-4">
              Destinos: Venezuela, Ucrania y Perú
            </h1>
            <div className="bg-slate-300 border-4 border-slate-300 hover:border-white rounded-3xl
             mb-5 mx-32 sm:py-2 sm:px-2 sm:mr-3 flex-none">
              <h1 className="py-3 text-slate-400 hover:text-slate-800">
                PASSENGERS
              </h1>
              <div className="flex justify-evenly">
                {passengers === 1 ? <Passenger /> : <Passengers />}
                <h1 className="text-2xl">
                  {passengers} {passengers === 1 ? "Persona" : "Personas"}
                </h1>
              </div>
            </div>
            <button className="font-semibold bg-red-500 hover:bg-red-600 rounded-3xl text-white py-6 px-6 sm:px-6 sm:mx-5 flex-none">
              <Link to="../../form">Register</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToBuyTicket;
