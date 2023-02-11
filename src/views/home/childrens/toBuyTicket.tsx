import { useState } from "react";
import { Link } from "react-router-dom";
import Passenger from "../../../assets/images/icons/passenger";
import Passengers from "../../../assets/images/icons/passengers";

const ToBuyTicket = () => {
  const [passengers, setPassengers] = useState(1);

  return (
    <>
      <section className="bg-violet-300 py-3 mb-4">
        <div className="flex flex-col container text-3xl text-center bg-indigo-800 py-16 mx-auto rounded-lg justify-around">
          <h1 className="mb-12 text-white">Tour Especial</h1>
          <div className="flex justify-evenly">
            <h1 className="flex text-slate-400 items-center mx-4">
              Destinos: Venezuela, Ucrania y Perú
            </h1>
            <div className="bg-white rounded-3xl py-2 px-2 mr-3">
              <h1 className="py-3 text-slate-400 hover:text-slate-700">PASSENGERS</h1>
              <div className="flex justify-evenly">
              {passengers === 1 ? <Passenger/>: <Passengers/>}
                
                <h1 className="text-2xl">{passengers} {passengers === 1 ? "Persona": "Personas"}</h1>
              </div>
            </div>
            <button className="font-semibold bg-red-500 hover:bg-red-600 rounded-3xl text-white px-6 mx-5">
              <Link to="../../form">Register</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToBuyTicket;
