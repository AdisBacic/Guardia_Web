import React from 'react';
import { Button, Typography } from '@mui/material';
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar'; // adjust the path as necessary
import SimpleSnackbar from '../Misc/Snackbar'; // adjust the path as necessary
import Maincard from '../Misc/Maincard'; // adjust the path as necessary
import MiddleSection from '../Misc/MiddleSection';
import Footer from '../Misc/Footer';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IntroVideo from '../Misc/IntroVideo';

const MainWindow = () => {

  const location = useLocation(); 
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const shouldScroll = queryParams.get('scrollTo') === 'anvandingsomraden';

    if (shouldScroll) {
      setTimeout(() => {
        const section = document.getElementById('anvandingsomraden-section');
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
        }
      }, 0); 
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);   

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
