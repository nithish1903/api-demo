import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

const Action = ({handleClose})=>{
    return (
        <React.Fragment>
            <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )
}

export function ErrorSnackbar({open,handleCloseSnack,message}) {

  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
    Transition: SlideTransition,
  });

  const { vertical, horizontal ,Transition } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return  handleCloseSnack();
    } 
    handleCloseSnack()
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        action={<Action handleClose={handleClose} />}
        autoHideDuration={5000}
        TransitionComponent={Transition}
      />
    </>
  );
}


export function SuccessSnackbars({open,handleCloseSnack,message}) {

  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
    Transition: SlideTransition,
  });

  const { vertical, horizontal ,Transition } = state;
  
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return handleCloseSnack()
      }
      handleCloseSnack()
    };
  
    return (
      <>
        <Snackbar  
          anchorOrigin={{ vertical, horizontal }}
          action={<Action handleClose={handleClose} />}
          autoHideDuration={6000} 
          open={open} 
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {message}!
          </Alert>
        </Snackbar>
      </>
    );
  }



export function ErrorReduxSnackbar({open:openBox,handleCloseSnack,message}) {

  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
    Transition: SlideTransition,
  });

  const { vertical, horizontal ,Transition } = state;

  const [open,setOpen] = React.useState(openBox)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return  handleCloseSnack(setOpen);
    } 
    handleCloseSnack(setOpen)
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        action={<Action handleClose={handleClose} />}
        autoHideDuration={5000}
        TransitionComponent={Transition}
      />
    </>
  );
}