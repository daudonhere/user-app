import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function CustomBackdrop({ open, progress }) {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress
        color="inherit"
        variant="determinate"
        value={progress}
        size={70}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {`${Math.round(progress)}%`}
      </Typography>
    </Backdrop>
  );
}

export default CustomBackdrop;