import React from 'react';
import { Button, Typography } from '@mui/material';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar'; // adjust the path as necessary
import SimpleSnackbar from '../Misc/Snackbar'; // adjust the path as necessary
import Maincard from '../Misc/Maincard'; // adjust the path as necessary
import MiddleSection from '../Misc/MiddleSection';
import Footer from '../Misc/Footer';

const MainWindow = () => {
  return (
    <>
    {/* <SimpleSnackbar /> */}
    

      <div className="flex flex-col min-h-screen">
        <ResponsiveAppBar />
        <Maincard />
        <MiddleSection />
        <Footer />
      </div>
      

    </>
  );
};

export default MainWindow;
