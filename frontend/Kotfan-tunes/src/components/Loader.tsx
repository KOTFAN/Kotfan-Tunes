import { loader } from "../assets";

type LoaderPropsType = {
  title: string;
};

const Loader = ({ title }: LoaderPropsType) => (
  <div className="w-full flex justify-center items-center flex-col ">
    <img src={loader} alt="Loader" className="w-32 h32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
