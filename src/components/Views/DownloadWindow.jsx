import React from 'react';
import { Button, Typography } from '@mui/material';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar';
import Footer from '../Misc/Footer';
import PriceCard from '../Misc/PriceCard';
import { useEffect } from 'react';
import DownloadCard from '../Misc/DownloadCard';



const DownloadWindow = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    {/* <SimpleSnackbar /> */}

      <div className="flex flex-col min-h-screen">
        <ResponsiveAppBar />
        <DownloadCard />
        <Footer />
      </div>
      

    </>
  );
};

export default DownloadWindow;
