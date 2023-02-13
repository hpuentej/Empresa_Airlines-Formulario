import { Link } from "react-router-dom";
import { usePassengerStore } from "../../../zustand/formStore";
import { shallow } from "zustand/shallow";

const Data = () => {
  // Zustand methods
  const { clients } = usePassengerStore((state) => ({   
    clients: state.clients
  }), shallow);

  const setClients = usePassengerStore((state) => state.setClients)

  const passangersView = clients.map((client, index) => {
    return(
        <div key={index}  className="flex flex-col mb-2 border-2 border-slate-100 border-b-violet-300 p-2
        ">
          <h1>PASAJERO {index + 1}</h1>
          <ul className="flex">
            <div className="flex">
              <li className="mx-2">{client.nacionalidad.toUpperCase()}:</li>
              <li className="mr-2">{client.nombres} {client.apellidos}</li>
              <li className="mr-2">{client.tipoDocumento}: {client.numeroDocumento}</li>
            </div>
            <div>
              <button className=" border-2 border-red-400 text-red-400 px-2 rounded
              hover:border-red-500 hover:text-red-500 mx-10"
              onClick={() => {
                // const newLista = clients.filter((client) => client.id !==  index + 1)
                const newLista = clients.filter((thisClient) => thisClient.id !==  client.id)
                setClients(newLista);
              }}
              >
                Eliminar
              </button>
            </div>
          </ul>
        </div>
    )
  })

  return (
    <>
      <div className="flex flex-col container mx-auto">
        <h1 className="text-violet-700 font-bold text-center p-2">
          VERIFICAR DATOS DE LOS PASAJEROS
        </h1>
        <div className="grid grid-rows-4 justify-items-start container mx-auto bg-slate-100 rounded-md p-5 border-2 border-gray-200 mb-5"
        >
          {passangersView}
        </div>
        <button className="border-2 p-4 border-violet-400 font-semibold rounded-lg text-violet-400 mx-auto hover:border-violet-600 hover:text-violet-600 mb-3">
          <Link to="/form">Add new passenger</Link>
        </button>
      </div>
    </>
  );
};

export default Data;
