import React, { FC } from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '../Alert/Alert';
import { ICustomSnackbar } from './CustomSnacbar.types';

export const CustomSnackbar: FC<ICustomSnackbar> = ({
  isOpen,
  handleClose,
  isSuccess,
}) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={`${isSuccess ? 'success' : 'error'}`}
        sx={{ width: '100%', backgroundColor: isSuccess ? '#20c997' : '' }}
      >
        {isSuccess ? (
          <>Message sent successfully!</>
        ) : (
          <>An error has occurred!</>
        )}
      </Alert>
    </Snackbar>
  );
};
