// MUI TYPES
import { AlertProps } from '@mui/material/Alert'
import { AlertTitleProps } from '@mui/material/AlertTitle'

export interface IAlertProps {
  alertProps: AlertProps;
  alertTitleProps?: AlertTitleProps;
  children?: React.ReactNode;
}