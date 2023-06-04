import Image from "next/image";
import Search from "./Search";

function Navbar() {
  return (
    <div className="flex space-x-10 justify-between dark:bg-gray-600 bg-amber-100 lg:text-lg p-6">
      <h1 className="flex">Logo</h1>
      <Search />
      <div className="space-x-5">
        <a href="#">All Games</a>
        <a href="#">PC</a>
        <a href="#">Playstation</a>
        <a href="#">Xbox</a>
        <a href="#">Nintendo</a>
      </div>
    </div>
  );
}

export default Navbar;
