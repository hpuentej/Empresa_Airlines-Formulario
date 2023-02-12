import { Plus, Minus } from "../../assets/images/icons";
import { usePassengerStore } from "../../zustand/formStore";
import { shallow } from "zustand/shallow";

const Count = () => {
  const { count, visibility } = usePassengerStore(
    (state) => ({
      count: state.count,
      visibility: state.visibility,
    }),
    shallow
  );

  return (
    <>
      {visibility} &&{
      {
        <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-80 flex justify-center items-center p-10">
          <div className="w-96 h-60 bg-white relative rounded-lg shadow-2xl p-5">
            <div className="flex justify-between mb-10">
              <div className="self-center">
                <h1>Passengers</h1>
              </div>
              <div className="flex justify-between border-2 rounded-lg px-3 border-slate-900">
                <button className="">
                  <Minus />
                </button>
                <h1>|</h1>
                <div className="m-2 px-2">
                  <h1>{count}</h1>
                </div>
                <h1>|</h1>
                <button>
                  <Plus />
                </button>
              </div>
            </div>
            <button
              className="font-semibold bg-violet-800 hover:bg-violet-900 rounded-3xl text-white py-6 px-6 mx-5 md:mx-5 md:px-6"
              // onClick={!visibility}
            >
              Aplicar
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Count;
