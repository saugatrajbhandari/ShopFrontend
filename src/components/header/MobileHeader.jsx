import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import NavigationDrawer from "./NavigationDrawer";

const MobileHeader = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  return (
    <>
      <div className="fixed top-0  w-full mx-auto py-5 px-4 z-50 bg-greyColor text-white">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-semibold sub-header">
            PROSHOP
          </Link>

          <Menu
            size={30}
            className="cursor-pointer"
            onClick={() => setIsDrawerOpened(true)}
          />
        </div>
      </div>

      <NavigationDrawer isOpen={isDrawerOpened} setIsOpen={setIsDrawerOpened} />
    </>
  );
};

export default MobileHeader;
