import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CustomDialog({ open, fullScreen, maxWidth, fullWidth }) {
  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"401 UNAUTHORIZED"}</DialogTitle>
      <DialogContent>
        <DialogContentText>You must log in first to access this page</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;