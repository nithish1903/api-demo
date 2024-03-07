import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export function SmallModalBox({open,handleModal,children}) {

  return (
    <>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] mx-auto md:w-[400px] px-2 md:px-3 py-2.5 md:py-4 border-[3px] border-[#CFD5E1] rounded-[8px]">
            {children}
        </Box>
      </Modal>
    </>
  );
}