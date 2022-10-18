import Header from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import Footer from "../components/footer/Footer";
import useWindowSize from "../utils/useWindowSize";
import cn from "classnames";

const AppLayout = ({ children }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width > 1024 ? <Header /> : <MobileHeader />}
      <div
        className={cn(
          "min-h-[100vh] max-w-[1290px] mx-auto mt-10 px-3 md:px-8",
          {
            "mt-[100px]": width < 1024,
          }
        )}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
