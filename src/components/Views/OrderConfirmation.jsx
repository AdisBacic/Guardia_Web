import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CircularProgress, LinearProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';




const OrderConfirmation = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlreadyAuthenticated, setIsAlreadyAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('Initial loading done');
      parseUrlAndAuthenticate();
    }, 1000); 
  }, []);

  const parseUrlAndAuthenticate = () => {
    const hashParts = window.location.href.split('#')[1]?.split('?');
    let token, orderId;
    if (hashParts && hashParts.length > 1) {
      token = hashParts[1].split('=')[1];
      if (hashParts[2]) {
        orderId = hashParts[2].split('=')[1];
      }
    }
  
    if (!token || !orderId) {
      console.error('Token or Order ID missing');
      setIsLoading(false);
      return;
    }
  
    checkOrderAuthentication(orderId, token).then(isAuthenticated => {
      console.log('Is order already authenticated:', orderId);
      if (!isAuthenticated) {
        sendPostRequest(token, orderId);
      } else {
        setIsAlreadyAuthenticated(true);
        setIsLoading(false);
      }
    });
  };

  const checkOrderAuthentication = async (orderId, token) => {
    const checkUrl = `https://guardia-prod.azurewebsites.net/v1/api/Order/CheckAuthenticateOrder?orderId=${orderId}`;
    try {
      const response = await fetch(checkUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
      const data = await response.text();
      return data.includes('Order is already authenticated');
    } catch (error) {
      console.error('Failed to check order authentication:', error);
      return false; 
    }
  };

  const sendPostRequest = (token, orderId) => {
    const backendUrl = `https://guardia-prod.azurewebsites.net/v1/api/Order/AuthenticateOrder?orderId=${orderId}&token=${token}`;
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log('Authenticated order:', data);
      setIsConfirmed(true);
    })
    .catch(error => {
      console.error('Failed to confirm order:', error);
      setIsConfirmed(false);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center bg-gradient-to-r from-gray-700 to-gray-900 justify-center min-h-screen">
       <div className="mb-4 w-1/2">
      <LinearProgress 
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'white', // Sets the progress bar color to white
          },
          '& .MuiLinearProgress-colorPrimary': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Optional: Sets a lighter white for the background of the progress bar
          }
        }}
      />
    </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 p-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.6 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
     <div className="text-center p-8 bg-gradient-to-r from-gray-300 to-gray-300 rounded-lg shadow-xl">
     {isAlreadyAuthenticated ? (
        <>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.9 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <GppMaybeIcon color="success" style={{ fontSize: '84px', marginBottom: '22px' }} />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.7 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="h5" color="black" gutterBottom align="center">
            Din order har redan blivit verifierad.
          </Typography>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="body2" color="black" gutterBottom align="center">
            Tack för att du använder Guardia.
          </Typography>
          </motion.div>

        </>

      ) : isConfirmed ? (
        <>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.9 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <VerifiedUserIcon color="success" style={{ fontSize: '84px', marginBottom: '22px' }} />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.7 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="h5" color="black" gutterBottom align="center">
            Din order är nu verifierad.
          </Typography>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="body2" color="black" gutterBottom align="center">
            Tack för att du använder Guardia.
          </Typography>
          </motion.div>
        </>
      ) : (
        <>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.9 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <GppBadIcon color="error" style={{ fontSize: '84px', marginBottom: '22px' }} />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.7 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="h5" color="black" gutterBottom align="center">
            Något gick fel!
          </Typography>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Typography variant="body2" color="black" gutterBottom align="center">
            Försök igen eller kontakta support.
          </Typography>
          </motion.div>

        </>
      )}
      </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation