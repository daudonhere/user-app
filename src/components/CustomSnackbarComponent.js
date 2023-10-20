import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function CustomSnackbar({ open, onClose, isLogin, isError }) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={isLogin ? 'success' : 'error'}
        variant="filled"
        sx={{
          width: '40vh',
        }}
      >
        <AlertTitle>{isLogin ? 'Success' : 'Error'}</AlertTitle>
        {isLogin ? 'Login Success.' : isError ? isError : 'Something Wrong.'}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;