// Footer.js
import React from 'react';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate(); // Initialize the navigate function


  const handleNavigate = (path) => {
    navigate(path);
  };
  
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Logo/>
              <span onClick={() => handleNavigate('/')} className="cursor-pointer self-center text-2xl font-semibold whitespace-nowrap text-white">Guardia</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Column 1 */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Resources</h2>
              <ul className="text-gray-400">
              <li className="mb-4">
                <span onClick={() => handleNavigate('/')} className="cursor-pointer hover:underline">
                  Guardia
                </span>
              </li>
              </ul>
            </div>
            {/* Column 2 */}
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/guardia" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/guardia" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div> */}
            {/* Column 3 */}
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Rättslig</h2>
              <ul className="text-gray-400">
              <li className="mb-4">
                <span onClick={() => handleNavigate('/privacypolicy')} className="cursor-pointer hover:underline">
                  Integritetspolicy
                </span>
              </li>
                
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">© 2024 <a href="https://guardia.com/" className="hover:underline">Guardia™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
