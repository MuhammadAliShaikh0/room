import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const PMethod = () => {
  const { state } = useLocation();
  const { room, nights, totalPrice } = state || {};

  const handlePayment = () => {
    // Implement payment processing logic here
    // Update booking and payment status, generate receipt, etc.
  };

  return (
    <Box sx={{ marginTop: '20px', padding: '20px' }}>
      <Typography variant="h4">Payment Method</Typography>
      <Typography variant="h6">You are booking: {room?.title} for {nights} night(s)</Typography>
      <Typography variant="h6">Total Price: ${totalPrice}</Typography>
      {/* Add form elements for payment method selection */}
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Proceed to Payment
      </Button>
    </Box>
  );
};

export default PMethod;
