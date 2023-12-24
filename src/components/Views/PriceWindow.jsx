import React from 'react';
import { Button, Typography } from '@mui/material';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar';
import Footer from '../Misc/Footer';
import PriceCard from '../Misc/PriceCard';


const PriceWindow = () => {
  return (
    <>
    {/* <SimpleSnackbar /> */}
    

      <div className="flex flex-col min-h-screen">
        <ResponsiveAppBar />
        <PriceCard/>
        <Footer />
      </div>
      

    </>
  );
};

export default PriceWindow;
