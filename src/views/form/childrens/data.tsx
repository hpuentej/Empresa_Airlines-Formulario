import { useForm } from "react-hook-form";
import { Flecha } from "../../../assets/images/icons"

type FormData = {
  firstName: string;
  lastName: string;
  nationality: string;
  document: number;
  documentNumber: number;
  DNI: number;
  CE: string;
  passport: string;
}

const Data = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit} className="w-full max-w-lg mb-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Inicio de nombre */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              // htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              // id="grid-first-name"
              type="text"
              placeholder="Hans"
              {...register("firstName")}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          {/* Fin de nombre */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              // htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              // id="grid-last-name"
              type="text"
              placeholder="Doe"
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Nationality
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              {...register("nationality")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Document type
            </label>
            <div className="relative">
              <select {...register("document")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //  id="grid-state"
              >
                <option value="DNI">DNI</option>
                <option value="CE" >CE</option>
                <option value="Passport">Passport</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Flecha/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Document number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              {...register("documentNumber")}
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-white hover:bg-violet-700 text-violet-700 hover:text-white border-2
          border-violet-700 font-bold py-2 px-4 rounded-full "
          onClick={() => {
            setValue("lastName", "Puente");
            setValue("firstName", "Hans");
          }}
        >
          Agregar datos del pasajero {}
        </button>
        </form>

          {/* <form onSubmit={onSubmit} className="mb-10">
            <div>
              <label>First Name</label>
              <input {...register("firstName")} />
            </div>
            <div>
              <label>Last Name</label>
              <input {...register("lastName")} />
            </div>
            <div>
              <label>Nationality</label>
              <input {...register("lastName")} />
            </div>
            <button
              type="button"
              onClick={() => {
                setValue("lastName", "Puente");
                setValue("firstName", "Hans");
              }}
            >
              SetValue
            </button>
        </form> */}
    </>
  )
}

export default Data