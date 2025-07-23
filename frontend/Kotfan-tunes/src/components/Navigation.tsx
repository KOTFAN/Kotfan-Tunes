import Logo from "./Logo";
import Search from "./Search";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 w-full">
      <Logo />

      <Search />
    </div>
  );
};

export default Navigation;
