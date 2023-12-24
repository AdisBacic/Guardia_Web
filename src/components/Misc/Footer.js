// Footer.js
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://guardia.com" className="flex items-center">
              <Logo/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Guardia</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Column 1 */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://guardia.com/" className="hover:underline">Guardia</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rättslig</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/privacy" className="hover:underline">Integritetspolicy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">Allmänna Villkor</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://guardia.com/" className="hover:underline">Guardia™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Add your social media or other links here */}
            {/* ... */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
