import { Input } from "@/components/ui/8bit/input";

const Search = () => (
  <div className="ml-4">
    <Input
      placeholder="Enter text"
      className="text-text text-base placeholder:text-text bg-zinc-900 border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none focus:ring-0"
    />
  </div>
);

export default Search;
