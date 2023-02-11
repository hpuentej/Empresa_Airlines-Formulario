// This file is the entry point for the form view
import { useEffect } from "react";
import { RegisterView } from "./childrens";
import { Layout } from "../../components/organisms";

const Form = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <RegisterView />
    </Layout>
  )
}

export default Form




