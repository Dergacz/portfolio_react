import React from 'react';

export interface ICustomSnackbar {
  isOpen: boolean;
  isSuccess: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}
