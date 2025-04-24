import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi'



import { logo } from '../assets'
import { links } from '../assets/constants'

const SidebarLinks = (handleCkick) => (
   <div className="mt-10">
      {links.map((item) => (
         <NavLink to={item.to} key={item.name}
            onClick={() => handleCkick && handleCkick()}
            className={({ isActive }) =>
               `flex justify-start items-center flex-row my-8 text-sm font-medium
               ${isActive ? 'text-textHover' : 'text-text'} hover:text-textHover`
            }>
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
         </NavLink>
      ))}
   </div>
)


const Sidebar = () => {
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <>
         <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-b from-main to-secondary">
            <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
            <SidebarLinks />
         </div>
         {/* burger menu */}
         <div className="absolute md:hidden block top-6 right-3 cursor-pointer">
            {isMobileMenuOpen ?
               (<RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />)
               :
               (<HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />)
            }
         </div>

         <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8d] backdrop-blur-lg z-10 p-6 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'left-0 ' : '-left-full'}`}>
            <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
            <SidebarLinks onClick={() => setMobileMenuOpen(false)} />
         </div>
      </>




   )
};

export default Sidebar;
