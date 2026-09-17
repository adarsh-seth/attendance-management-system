import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-black text-white">
      <div className="m-auto flex max-w-7xl items-center justify-between px-2 py-6">
        <Link className="text-xl font-bold ">
          Attend<span className="text-yellow-400">Ease</span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <Link to="/" className="transition-colors duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-4">
            Home
          </Link>
          <a href="/#features" className="transition-colors duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-4">
            Features
          </a>
          <a href="/#about" className="transition-colors duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-4">
            About
          </a>
          <Link to="/login" className="rounded-lg border border-yellow-400 bg-yellow-200 px-4 py-2 font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-400 hover:shadow-md">
            Login
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-3 border-t border-white/10 bg-[#333] px-2 py-4 text-white lg:hidden">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 font-medium transition-colors duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-4"
          >
            Home
          </Link>

          <a
            href="/#features"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 font-medium transition-colors duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-4"
          >
            Features
          </a>

          <a
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 font-medium transition-colors duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-4"
          >
            About
          </a>

          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-md border border-yellow-300 bg-yellow-300 px-4 py-4 text-center font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-400 hover:shadow-md"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
