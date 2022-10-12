import Header from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import Footer from "../components/footer/Footer";
import useWindowSize from "../utils/useWindowSize";

const AppLayout = ({children}) => {
  const {width} = useWindowSize();
  return (
    <>
    {width > 1024 ? <Header /> : <MobileHeader />}
    {children}
    <Footer />
    </>
  )
}

export default AppLayout