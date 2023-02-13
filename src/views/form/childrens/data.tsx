import { useForm } from "react-hook-form";
import { usePassengerStore } from "../../../zustand/formStore";
import { shallow } from "zustand/shallow";

enum Document {
  DNI = "DNI",
  CE = "CE",
  passport = "passport"
}

interface FormData {
  nombres: string
  apellidos: string
  nacionalidad: string
  tipoDocumento: Document
  numeroDocumento: number | string
}

const Data = () => {

  // Zustand methods
  const { count, clients } = usePassengerStore((state) => ({
    count: state.count,
    clients: state.clients
  }), shallow);

  const addClient = usePassengerStore((state) => state.addClient)
  // const setMessage = usePassengerStore((state) => state.setMessage)

  // Hook form methods
  const { register, getValues, watch, handleSubmit, formState: {isSubmitSuccessful},
          formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit((data, e) => {
    e?.target.reset()
    // console.log(data);
    // setMessage();
  });
  
  // Watch form values
  const nombres = watch("nombres")
  const apellidos = watch("apellidos")
  const nacionalidad = watch("nacionalidad")
  const documentType = watch("tipoDocumento")
  const numeroDocumento = watch("numeroDocumento")

  const isValid = nombres && apellidos && nacionalidad && documentType && numeroDocumento && !errors.nombres && !errors.apellidos && !errors.nacionalidad && !errors.tipoDocumento && !errors.numeroDocumento ? true : false 

  return (
    <>
      <form onSubmit={onSubmit} className="mb-10">
        <div className="flex flex-col mb-2">
          <label>NOMBRES</label>
          <input 
            className="border-2 rounded p-2 focus:outline-none focus:bg-white focus:border-violet-500"
            placeholder="Como figura en su documento de viaje"
            {...register("nombres", {
              required: true,
              maxLength: 28,
              pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u0027\u0022\s]{1,40}$/
              })
            } maxLength={30}/>
            { errors.nombres?.type === "required" && <h1 className="text-red-500">El nombre es requerido</h1>}
            { errors.nombres?.type === "maxLength" && <h1 className="text-red-500">El nombre debe tener como máximo 28 caracteres</h1>}
            { errors.nombres?.type === "pattern" && <h1 className="text-red-500">Ingresa un nombre válido</h1>
          }
        </div>
        <div className="flex flex-col mb-2">
          <label>APELLIDOS</label>
          <input 
            className="border-2 rounded p-2 focus:outline-none focus:bg-white focus:border-violet-500"
            placeholder="Como figura en su documento de viaje"
            {...register("apellidos", {
              required: true,
              maxLength: 28,
              pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u0027\u0022\s]{1,40}$/
              })
            } maxLength={30}/>
            { errors.apellidos?.type === "required" && <h1 className="text-red-500">El apellido es requerido</h1>}
            { errors.apellidos?.type === "maxLength" && <h1 className="text-red-500">El apellido debe tener como máximo 28 caracteres</h1>}
            { errors.apellidos?.type === "pattern" && <h1 className="text-red-500">Ingresa un apellido válido</h1>
          }
        </div>
        <div className="flex flex-col mb-2">
          <label>NACIONALIDAD</label>
          <input 
            className="border-2 rounded p-2 focus:outline-none focus:bg-white focus:border-violet-500"
            placeholder="Ej: Peruano"
            {...register("nacionalidad", {
              required: true,
              maxLength: 30,
              pattern:/^[A-Za-z\s]+$/
              })
            } maxLength={32}/>
            { errors.nacionalidad?.type === "required" && <h1 className="text-red-500">La nacionalidad es requerida</h1>}
            { errors.nacionalidad?.type === "maxLength" && <h1 className="text-red-500">La nacionalidad debe tener como máximo 30 caracteres</h1>}
            { errors.nacionalidad?.type === "pattern" && <h1 className="text-red-500">Ingresa una nacionalidad válida</h1>}
        </div>
        
        <div className="flex mb-5">
          <label className="mr-5">TIPO DE DOCUMENTO</label>
          <select {...register("tipoDocumento")}>
            <option value="">Elige una opción</option>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
            <option value="passport">Pasaporte</option>
          </select>
        </div>
        <div>
          { documentType === "DNI" && <div className="mb-5">
            <label className="mr-5 self-center">NÚMERO DE DNI</label>
            <input 
              className="border-2 rounded p-2 focus:outline-none focus:bg-white focus:border-violet-500"
              {...register("numeroDocumento", 
              { required: true, maxLength: 8, pattern: /^[0-9]{1,8}$/ })} maxLength={8}/>
              { errors.numeroDocumento?.type === "required" && <h1 className="text-red-500">El número de DNI es requerido</h1>}
              { errors.numeroDocumento?.type === "maxLength" && <h1 className="text-red-500">El número de DNI debe tener como máximo 8 caracteres</h1>}
              { errors.numeroDocumento?.type === "pattern" && <h1 className="text-red-500">Ingresa un número de DNI válido</h1>}
          </div>}
          
          { documentType === "CE" && <div className="mb-5">
            <label className="mr-5 self-center">NÚMERO DE CE</label>
            <input 
              className="border-2 rounded p-2 focus:outline-none focus:bg-white focus:border-violet-500"
              {...register("numeroDocumento",
              { required: true, maxLength: 9, pattern: /^[0-9A-Za-z]{1,9}$/ })} maxLength={9}/>
              { errors.numeroDocumento?.type === "required" && <h1 className="text-red-500">El número de CE es requerido</h1>}
              { errors.numeroDocumento?.type === "maxLength" && <h1 className="text-red-500">El número de CE debe tener como máximo 9 caracteres</h1>}
              { errors.numeroDocumento?.type === "pattern" && <h1 className="text-red-500">Ingresa un número de CE válido</h1>}
          </div>}

          { documentType === "passport" && <div className="mb-5">
            <label className="mr-5 self-center">NÚMERO DE PASAPORTE</label>
            <input 
              className="border-2 rounded p-2 focus:outline-none focus:bg-white focus:border-violet-500"
              {...register("numeroDocumento",
              { required: true, maxLength: 9, pattern: /^[0-9]{1,9}$/ })} maxLength={9}/>
              { errors.numeroDocumento?.type === "required" && <h1 className="text-red-500">El número de pasaporte es requerido</h1>}
              { errors.numeroDocumento?.type === "maxLength" && <h1 className="text-red-500">El número de pasaporte debe tener como máximo 9 caracteres</h1>}
              { errors.numeroDocumento?.type === "pattern" && <h1 className="text-red-500">Ingresa un número de pasaporte válido</h1>}
          </div> }

        </div>
        <div className="flex justify-between">
          <button type="submit" 
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5
            ${isValid ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled= {!isValid}
            onClick={() => {
              const client =  getValues()
              clients.length < 4 ? addClient(client) : alert("Solo se pueden agregar 4 pasajeros") 
            }}
          >
            Add Passenger
          </button >
          { isSubmitSuccessful && <h1 className="text-green-500 self-center">Pasajero agregado correctamente</h1> }
        </div>
      </form>
    </>
  )
}

export default Data