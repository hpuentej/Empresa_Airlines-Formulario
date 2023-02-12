import { Link } from "react-router-dom";
import { usePassengerStore } from "../../../zustand/formStore";
import { shallow } from "zustand/shallow";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

const RegisterView = () => {
  const { passengers } = usePassengerStore(
    (state) => ({
      passengers: state.passengers,
    }),
    shallow
  );

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <h1 className="text-3xl flex justify-center mb-10">{passengers}</h1>
      <form onSubmit={onSubmit} className="mb-10">
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <button
          type="button"
          onClick={() => {
            setValue("lastName", "Puente"); // ✅
            setValue("firstName", "Hans"); 
          }}
        >
          SetValue
        </button>
      </form>
      <Link to="/confirmation">Confirmacion de datos ingresados</Link>
    </>
  );
};

export default RegisterView;
