// import { Link } from "react-router-dom";

import { GetData } from "../../../views/form/childrens";
import venezuela from "../../../assets/images/photos/venezuela.jpg";
import ucrania from "../../../assets/images/photos/ucrania.jpg";
import peru from "../../../assets/images/photos/peru.jpg";

const RegisterView = () => {
  return (
    <>
      {/* <h1 className="text-3xl flex justify-center mb-10">{passengers}</h1> */}
      <div className="">
        <div className="grid grid-cols-3 container mx-auto bg-slate-100 rounded-md p-5
        justify-items-center">
          <div className="col-span-3 lg:col-span-2 border-2 border-gray-300 rounded-md p-10 m-3 ">
            <GetData />
          </div>
          <div className="grid col-span-3 lg:col-span-1 gap-4 border-2 border-gray-300 bg-violet-200 rounded-md p-5 m-3">
            <div>
              <h1>Venezuela</h1>
            <img
              src={venezuela}
              alt="Playa de Venezuela"
              className="sm:h-64 w-full mx-auto rounded-xl object-cover"
            />
            </div>
            <div>
              <h1>Ucrania</h1>
            <img
              src={ucrania}
              alt="Edificio clásico en Ucrania"
              className="sm:h-64 w-full mx-auto rounded-xl object-cover"
            />
            </div>
            <div>
              <h1>Perú</h1>
            <img
              src={peru}
              alt="Ruina en Cuzco"
              className="sm:h-64 w-full mx-auto rounded-xl object-cover"
            />
            </div>
          </div>
        </div>
      </div>
      
      {/* <Link to="/confirmation">Confirmacion de datos ingresados</Link> */}
    </>
  );
};

export default RegisterView;
