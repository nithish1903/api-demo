import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

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


export function ErrorBasicSnackbar({isError,handleCallBack,errorMessage}) {
  let msg_err = errorMessage && errorMessage.response && errorMessage.response.data && errorMessage.response.data.message
  const [open, setOpen] = React.useState(isError?isError:false);

  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
    Transition: SlideTransition,
  });
  const { vertical, horizontal ,Transition } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <button className='bg-[#fff] px-2 py-1 text-blue-600 rounded-md font-[600] mx-3' onClick={handleCallBack}>
        Re-try Again
      </button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={7000}
        TransitionComponent={Transition}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
        message={msg_err?msg_err:"Something went wrong!"}
        action={action}
      />
    </>
  );
}