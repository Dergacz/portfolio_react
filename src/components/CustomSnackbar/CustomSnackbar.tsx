import { Snackbar } from '@mui/material';
import { FC } from 'react';
import { Alert } from '../Alert/Alert';
import { useMyContext } from '../Provider/Provider';

export const CustomSnackbar: FC = () => {
  const { isOpen, isSuccess, closePopup } = useMyContext();

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={closePopup}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      disableWindowBlurListener
    >
      <Alert
        onClose={closePopup}
        severity={`${isSuccess ? 'success' : 'error'}`}
        sx={{ width: '100%', backgroundColor: isSuccess ? '#20c997' : '' }}
      >
        {isSuccess ? <>Message sent successfully!</> : <>An error has occurred!</>}
      </Alert>
    </Snackbar>
  );
};
