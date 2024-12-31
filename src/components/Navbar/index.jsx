import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto mt-8 px-6 md:px-0">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black font-semibold tracking-[-0.7px]">
          akmalefs.
        </h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 space-y-4 md:space-y-0 md:flex items-center gap-x-10 ${
            isMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to="/" className="font-normal tracking-[-0.7px] text-black">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-normal tracking-[-0.7px] text-black"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link href="#" className="font-normal tracking-[-0.7px] text-black">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="font-normal tracking-[-0.7px] text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
