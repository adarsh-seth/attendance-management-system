import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-#222 text-black">
      <div className="m-auto flex max-w-7xl items-center justify-between px-2 py-6">
        <Link className="text-xl font-bold ">
          Attend<span className="text-yellow-400">Ease</span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <Link to="/" className="transition-colors duration-200 hover:text-red-600 hover:underline hover:underline-offset-4">
            Home
          </Link>
          <a href="/#features" className="transition-colors duration-200 hover:text-red-600 hover:underline hover:underline-offset-4">
            Features
          </a>
          <a href="/#about" className="transition-colors duration-200 hover:text-red-600 hover:underline hover:underline-offset-4">
            About
          </a>
          <Link to="/login" className=" bg-yellow-300 border-2- b px-2 py-4transition-colors duration-200 hover:text-red-600 hover:underline hover:underline-offset-4">
            Login
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label="Open menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-3 border-t border-black/10 bg-yellow-300 px-2 py-4 lg:hidden">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg px-3 py-2 font-medium transition-colors duration-200 hover:bg-yellow-100 hover:text-red-600"
          >
            Home
          </Link>

          <a
            href="/#features"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg px-3 py-2 font-medium transition-colors duration-200 hover:bg-yellow-100 hover:text-red-600"
          >
            Features
          </a>

          <a
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg px-3 py-2 font-medium transition-colors duration-200 hover:bg-yellow-100 hover:text-red-600"
          >
            About
          </a>

          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-lg bg-black px-3 py-2.5 text-center font-medium text-white transition-colors duration-200 hover:bg-yellow-500 hover:text-black"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
