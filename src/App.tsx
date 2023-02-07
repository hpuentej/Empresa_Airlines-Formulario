import { useCounterStore } from './store/counterStore';

const App = () => {

  const count = useCounterStore((state) => state.count )
  const names = useCounterStore((state) => state.nombres )
  const lastNames = useCounterStore((state) => state.apellidos )

  return (
    <>
      <h1 className="text-3xl font-bold text-green-400">Counter: {count}</h1>
      <h1 className="text-3xl font-bold text-green-400">Nombres: {names}</h1>
      <h1 className="text-3xl font-bold text-green-400">Apellidos: {lastNames}</h1>
    </>
  );
};

export default App;
