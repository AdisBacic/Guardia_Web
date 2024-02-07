import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const OrderConfirmation = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = 'uvwvM563AenDUWNigCNLwwgXTc4M0vacjq8ax-yoWg4';
    const orderId = '0c71aa11-9e64-471f-9078-220a641d1734';

    // Ensure token and orderId are available before proceeding
    if (token && orderId) {
      sendPostRequest(token, orderId);
    } else {
      console.error('Token or Order ID missing');
      setIsLoading(false);
    }
  }, []);

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
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 p-5">
     <div className="text-center p-8 bg-white rounded-lg shadow-xl">
     {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <CircularProgress color="inherit" />
          <Typography variant="body1" color="primary">
            Signerar...
          </Typography>
        </motion.div>
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

          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.9 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="mt-5">
            <Button
              variant="contained"
              color="warning"
              onClick={() => setIsConfirmed(false)}
            >
              Stäng
            </Button>
          </div>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 1 } }}
          viewport={{ once: true }}
          className="text-black"
        >
          <Typography variant="body1" color="error">
            Det uppstod ett fel vid bekräftelsen.
          </Typography>
        </motion.div>
      )}
      </div>
    </div>
  );
};

export default OrderConfirmation