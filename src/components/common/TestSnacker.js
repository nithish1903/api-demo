import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar({open,setOpen}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return  setOpen(false);;
    } 
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{   vertical: 'top',
        horizontal: 'center',}}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      />
    </div>
  );
}
