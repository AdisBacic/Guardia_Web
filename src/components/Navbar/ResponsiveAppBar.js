import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDemoClick = () => {
    navigate('/demo'); 
  };

  const pages = [
    { name: 'Användning', path: '/', specialHandle: true },
    { name: 'Priser', path: '/priser' }, 
    { name: 'Support', path: '/support' },
    // { name: 'Om oss', path: '/omoss' },
  ];

  const handleNavigate = (page) => {
    if (page.name === 'Användingsområden') {
      navigate('/?scrollTo=anvandingsomraden');
    } else {
      navigate(page.path);
    }
  };
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div 
          className="flex items-center space-x-0 rtl:space-x-reverse cursor-pointer" 
          onClick={navigateHome}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#77d47e" viewBox="0 0 22 21" style={{ width: '45px', height: '64px' }}>
            <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.560c1.11.300 2.229.655 2.887.870a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.990a11.775 11.775 0 0 1-2.517 2.453a7.159 7.159 0 0 1-1.048.625c-.280.132-.581.240-.829.240s-.548-.108-.829-.240a7.158 7.158 0 0 1-1.048-.625a11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692a1.54 1.54 0 0 1 1.044-1.262a62.456 62.456 0 0 1 2.185-.870z" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Guardia</span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            size="small"
            variant="contained"
            className='rounded-full'
            startIcon={<PlayArrowIcon />}
            sx={{
              ml: { xs: 0.1, md: 2 },
              p: { xs: 0.5, md: 2 },
            }}
            color="success"
            onClick={handleDemoClick}
          >
            Boka Demo
          </Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'flex w-full' : 'hidden'} md:flex md:w-auto md:order-1`} id="navbar-sticky">
  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 w-full md:w-auto">
    {pages.map((page) => (
      <li key={page.name}>
        <button
          onClick={() => {
            if (page.specialHandle) {
              handleNavigate({ name: 'Användingsområden' });
            } else {
              navigate(page.path);
            }
          }}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-green-700 hover:text-white hover:transition-colors duration-300 md:hover:bg-transparent md:p-0 md:hover:text-blue-800 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
        >
          {page.name}
        </button>
      </li>
    ))}
  </ul>
</div>
      </div>
    </nav>
  );
};

export default Navbar;

