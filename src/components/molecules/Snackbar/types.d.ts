import { SnackbarProps } from '@mui/material/Snackbar'

export interface iSnackbarProps extends Pick<SnackbarProps, 'open' | 'autoHideDuration' | 'onClose'> {
  severity: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
}