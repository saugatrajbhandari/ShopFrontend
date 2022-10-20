import "react-modern-drawer/dist/index.css";
import { X } from "react-feather";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import navigationMenus from "../../navigation/navigationMenus";

const NavigationDrawer = (props) => {
  const { isOpen, setIsOpen } = props;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Drawer
      open={isOpen}
      style={{ background: "#343A40" }}
      onClose={toggleDrawer}
      direction="right"
      size={320}
    >
      <div className="px-8 text-white">
        <div className="flex justify-end mt-5 ">
          <X
            size={27}
            color="white"
            onClick={toggleDrawer}
            className="cursor-pointer"
          />
        </div>

        <div>
          {navigationMenus.map((menu) => {
            return (
              <Link
                to={menu.path}
                key={menu.id}
                onClick={toggleDrawer}
                className="flex items-center space-x-[2px] my-5"
              >
                <span className="font-bold">
                  <menu.icon size={15} />
                </span>
                <span className="font-medium small-text capitalize">
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center mt-10">
          <input type="text" className="py-1 w-3/4" name="" id="" />
          <button className="ml-2 bg-white hover:bg-gray-100 text-gray-800 py-[2] font-medium px-1 border border-gray-400 rounded">
            Submit
          </button>
        </div>

        <div className="text-center mt-20">
          <Link to="/" className="font-semibold main-header">
            PROSHOP
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
