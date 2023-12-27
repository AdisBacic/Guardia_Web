import React from 'react';
import { Button, Typography } from '@mui/material';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar';
import SimpleSnackbar from '../Misc/Snackbar';
import DemoCard from '../Misc/DemoCard';
import Footer from '../Misc/Footer';
import { useEffect } from 'react';




const DemoWindow = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {/* <SimpleSnackbar /> */}
    

      <div className="flex flex-col min-h-screen">
        <ResponsiveAppBar />
        <DemoCard />
        <Footer />
       
      </div>
      

    </>
  );
};

export default DemoWindow;
