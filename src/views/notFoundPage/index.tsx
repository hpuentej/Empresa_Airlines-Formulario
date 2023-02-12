import { useEffect } from "react";
import { Layout } from "../../components/organisms";

const NotFoundPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="bg-indigo-300 py-3 mb-4">
        <div
          className=" container text-4xl text-center text-red-500 bg-indigo-800 py-28 mx-auto rounded-lg"
        >
          <h1>404 Not Found</h1>
          <h1 className="text-base">Página no encontrada</h1>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
