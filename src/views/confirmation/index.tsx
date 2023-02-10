import { useEffect } from "react";
import { Data } from "./childrens";
import { Layout } from "../../components/organisms";

const DataConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      <Data/>
    </Layout>
  )
}

export default DataConfirmation