import React from 'react';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar';
import Footer from '../Misc/Footer';
import { useEffect } from 'react';
import SupportCard from '../Misc/SupportCard';


const SupportWindow = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {/* <SimpleSnackbar /> */}
      <div className="flex flex-col min-h-screen">
        <ResponsiveAppBar />
        {/* <DemoCard /> */}
        <SupportCard />
        <Footer />
      </div>
    </>
  );
};

export default SupportWindow;