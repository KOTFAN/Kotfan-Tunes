import Search from "./Search";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 w-full">
      <img src={logo} alt="Logo" className="h-10 w-auto" />

      <Search />
    </div>
  );
};

export default Navigation;
