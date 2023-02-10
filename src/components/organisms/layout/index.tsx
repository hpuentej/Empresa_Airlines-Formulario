import { ILayout } from './props';
import { Header, Footer } from '../../organisms';


const Layout = ({children}: ILayout) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout
