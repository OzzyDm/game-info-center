import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex space-x-10 justify-between dark:bg-gray-600 bg-amber-100 lg:text-lg p-6">
      <h1 className="flex">Logo</h1>
      <Search />
      <ul className="flex space-x-5">
        <li>
          <Link href="/">All Games</Link>
        </li>
        <li>
          <Link href="#">PC</Link>
        </li>
        <li>
          <Link href="#">Playstation</Link>
        </li>
        <li>
          <Link href="#">Xbox</Link>
        </li>
        <li>
          <Link href="#">Nintendo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
