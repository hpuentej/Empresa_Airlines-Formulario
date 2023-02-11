import { useEffect } from "react";
import { Layout } from "../../components/organisms";
import { ToBuyTicket, TouristicDestinations  } from "./childrens";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Layout>
        <ToBuyTicket />
        <TouristicDestinations />
      </Layout>
    </>
  );
};

export default Home;
