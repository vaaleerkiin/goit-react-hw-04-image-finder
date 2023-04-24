import { Portal } from '@mui/base';

import { Img, Backdrop } from './Modal.styled';
import React from 'react';

export const Modal = ({ open, onClick, onKey, img, tags }) => {
  return (
    <Portal>
      <Backdrop
        maxWidth="1000"
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClose={onClick}
      >
        <Img src={img} alt={tags} onClick={onClick} />
      </Backdrop>
    </Portal>
  );
};
