import { useForm } from "react-hook-form";
import { usePassengerStore } from "../../../zustand/formStore";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

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

  // Hook form methods
  const { register, getValues, watch, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(() => {});
  
  // Watch form values
  const nombres = watch("nombres")
  const apellidos = watch("apellidos")
  const nacionalidad = watch("nacionalidad")
  const documentType = watch("tipoDocumento")
  const numeroDocumento = watch("numeroDocumento")

  const isValid = nombres && apellidos && nacionalidad && documentType && numeroDocumento

  // Zustand methods
  const { count, clients } = usePassengerStore((state) => ({
    count: state.count,
    clients: state.clients
  }), shallow);

  return (
    <>
      <form onSubmit={onSubmit} className="mb-10">
        <div>
          {/* <h1>{clients[0].nombres}</h1> */}
          {/* <h1>{count}</h1> */}
          <label>NOMBRES</label>
          <input placeholder="Como figura en su documento de viaje"
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
        <div>
          <label>APELLIDOS</label>
          <input placeholder="Como figura en su documento de viaje"
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
        <div>
          <label>NACIONALIDAD</label>
          <input placeholder="Ej: Peruano"
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
        
        <div>
          <label>TIPO DE DOCUMENTO</label>
          <select {...register("tipoDocumento")}>
            <option value="">Elige una opción</option>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
            <option value="passport">Pasaporte</option>
          </select>
        </div>
        <div>
          { documentType === "DNI" && <div>
            <label>NÚMERO DE DNI</label>
            <input {...register("numeroDocumento", 
              { required: true, maxLength: 8, pattern: /^[0-9]{1,8}$/ })} maxLength={8}/>
              { errors.numeroDocumento?.type === "required" && <h1 className="text-red-500">El número de DNI es requerido</h1>}
              { errors.numeroDocumento?.type === "maxLength" && <h1 className="text-red-500">El número de DNI debe tener como máximo 8 caracteres</h1>}
              { errors.numeroDocumento?.type === "pattern" && <h1 className="text-red-500">Ingresa un número de DNI válido</h1>}
          </div>}
          
          { documentType === "CE" && <div>
            <label>NÚMERO DE CE</label>
            <input {...register("numeroDocumento",
              { required: true, maxLength: 9, pattern: /^[0-9A-Za-z]{1,9}$/ })} maxLength={9}/>
              { errors.numeroDocumento?.type === "required" && <h1 className="text-red-500">El número de CE es requerido</h1>}
              { errors.numeroDocumento?.type === "maxLength" && <h1 className="text-red-500">El número de CE debe tener como máximo 9 caracteres</h1>}
              { errors.numeroDocumento?.type === "pattern" && <h1 className="text-red-500">Ingresa un número de CE válido</h1>}
          </div>}

          { documentType === "passport" && <div>
            <label>NÚMERO DE PASAPORTE</label>
            <input {...register("numeroDocumento",
              { required: true, maxLength: 9, pattern: /^[0-9]{1,9}$/ })} maxLength={9}/>
              { errors.numeroDocumento?.type === "required" && <h1 className="text-red-500">El número de pasaporte es requerido</h1>}
              { errors.numeroDocumento?.type === "maxLength" && <h1 className="text-red-500">El número de pasaporte debe tener como máximo 9 caracteres</h1>}
              { errors.numeroDocumento?.type === "pattern" && <h1 className="text-red-500">Ingresa un número de pasaporte válido</h1>}
          </div> }

        </div>
        <button type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled= {!isValid}
          onClick={() => {
            const client =  getValues()
            console.log(client)
          }}
        >
          SetValue
        </button >
      </form>
    </>
  )
}

export default Data