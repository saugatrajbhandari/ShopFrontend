import { Link } from "react-router-dom"
import navigationMenus from "../../navigation/navigationMenus"

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-greyColor py-5 px-10">
      <div className="flex items-center">
        <h1 className="font-semibold main-header text-white">PROSHOP</h1>

        <div className="ml-10">
          <input type="text" className="py-2" name="" id="" />
          <button className="ml-2 bg-white hover:bg-gray-100 text-gray-800 py-1 font-medium px-2 border border-gray-400 rounded">Submit</button>
        </div>

      </div>
      <div className="flex space-x-5 items-center text-white">
        {navigationMenus.map((menu) => {
          return (
            <Link to={menu.path} key={menu.id} className="flex items-center space-x-[2px]">
            <span className="font-bold"><menu.icon size={15}/ ></span>
            <span className="font-medium small-text capitalize">{menu.name}</span>
          </Link>
          )
        })}
       
      </div>
    </div>
  )
}

export default Header