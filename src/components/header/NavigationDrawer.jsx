import "react-modern-drawer/dist/index.css";
import { ShoppingCart, X } from "react-feather";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";


const NavigationDrawer = (props) => {
  const {isOpen, setIsOpen} = props;

  const  toggleDrawer = () =>{
    setIsOpen((prevState) => !prevState);
  }

  return (
    <Drawer open={isOpen}  style={{background: "#343A40"}} onClose={toggleDrawer} direction="right" size={320}>

        <div className="px-8 text-white">
            <div className="flex justify-end mt-5 ">
                <X size={27} color="white" onClick={toggleDrawer} className="cursor-pointer"/>
            </div>

            <div className="px-2 mt-5">
            <Link to="cart/" className="flex items-center space-x-[2px]">
          <span className="font-bold"><ShoppingCart size={15}/ ></span>
          <span className="font-medium small-text">CART</span>
        </Link>
            </div>
        </div>

    </Drawer>
  )
}

export default NavigationDrawer