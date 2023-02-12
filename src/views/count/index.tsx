import { useEffect } from "react";
import { Plus, Minus, Ellipsis } from "../../assets/images/icons";
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

  const { toggle, increment, decrement } = usePassengerStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>      
        {visibility && (
          <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-80 flex justify-center items-center p-10">
            <div className="w-96 h-60 bg-white relative rounded-lg shadow-2xl p-5">
              <div className="flex justify-between mb-10">
                <div className="self-center">
                  <h1>Passengers</h1>
                </div>
                <div className="flex justify-evenly border-2 rounded-lg px-2 border-slate-900">
                  <button
                    onClick={() => {
                      count > 1 ? decrement() : null;
                    }}
                  >
                    <Minus />
                  </button>
                  <div className="self-center">
                    <Ellipsis />
                  </div>
                  <div className="m-2 px-2">
                    <h1>{count}</h1>
                  </div>
                  <div className="self-center">
                    <Ellipsis />
                  </div>
                  <button
                    onClick={() => {
                      count < 4 ? increment() : null;
                    }}
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              <button
                className="font-semibold bg-violet-800 hover:bg-violet-900 rounded-3xl text-white py-6 px-6 mx-5 md:mx-5 md:px-6"
                onClick={toggle}
              >
                Aplicar
              </button>
            </div>
          </div>
        )}      
    </>
  );
};

export default Count;
