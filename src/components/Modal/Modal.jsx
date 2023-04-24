import { Portal } from '@mui/base';

import { Img, Backdrop } from './Modal.styled';
import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ open, onClick, img, tags }) => {
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
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
