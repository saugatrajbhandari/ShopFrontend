import Header from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import Footer from "../components/footer/Footer";
import useWindowSize from "../utils/useWindowSize";

const AppLayout = ({children}) => {
  const {width} = useWindowSize();
  return (
    <>
    {width > 1024 ? <Header /> : <MobileHeader />}
    <div className="min-h-[100vh] max-w-[1290px] mx-auto pt-10 px-3 md:px-8">
    {children}
    </div>
    <Footer />
    </>
  )
}

export default AppLayout