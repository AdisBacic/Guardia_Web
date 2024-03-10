import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDemoClick = () => {
    navigate("/demo");
  };

  const pages = [
    { name: "Användning", path: "/", specialHandle: true },
    { name: "Priser", path: "/priser" },
    { name: "Support", path: "/support" },
    { name: "Ladda ner", path: "/download" },
  ];

  const handleNavigate = (page) => {
    if (page.name === "Användingsområden") {
      navigate("/?scrollTo=anvandingsomraden");
    } else {
      navigate(page.path);
    }
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .nav-link {
            color: #fff;
            position: relative;
            text-decoration: none;
          }
          .nav-link::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px; /* Adjusted for visibility */
            background-color: white;
            bottom: 0;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.2s ease-in-out;
          }
          .nav-link:hover::before, .nav-link:focus::before {
            transform-origin: left;
            transform: scaleX(1);
          }
        `}
      </style>

      <nav className="fixed w-full z-20 top-0 start-0 bg-[#090A0F]">
        <div className="flex flex-wrap md:flex-row mx-auto p-4 justify-between max-w-[1200px]">
          <div
            className="flex items-right space-x-0 cursor-pointer"
            onClick={navigateHome}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#77d47e"
              viewBox="0 0 21 18"
              className="w-8 h-8 pl-1"
            >
              <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.560c1.11.300 2.229.655 2.887.870a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.990a11.775 11.775 0 0 1-2.517 2.453a7.159 7.159 0 0 1-1.048.625c-.280.132-.581.240-.829.240s-.548-.108-.829-.240a7.158 7.158 0 0 1-1.048-.625a11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692a1.54 1.54 0 0 1 1.044-1.262a62.456 62.456 0 0 1 2.185-.870z" />
            </svg>
            <span className="text-xl font-semibold whitespace-nowrap text-white px-1 font-poppins-light">
              Guardia
            </span>
          </div>

          <div className="md:hidden" style={{ position: "fixed", right: 10 }}>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 pb-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`flex-grow ${isMenuOpen ? "flex" : "hidden"} md:flex ${
              isMenuOpen ? "justify-start" : "justify-end"
            }`}
            id="navbar-sticky"
          >
            <ul
              className={`flex flex-col p-4 mt-4 md:flex-row  md:mt-0 md:p-0 ${
                isMenuOpen ? "text-left" : "md:text-left"
              }`}
            >
              {pages.map((page) => (
                <li key={page.name} className="">
                  <button
                    onClick={() => {
                      if (page.specialHandle) {
                        handleNavigate({ name: "Användingsområden" });
                      } else {
                        navigate(page.path);
                      }
                    }}
                    className="block py-2 px-5 text-white rounded hover:bg-transparent md:border-0 nav-link"
                  >
                    {page.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
