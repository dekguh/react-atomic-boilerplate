// MUI TYPES
import { DialogProps } from '@mui/material/Dialog'

export interface IDialogProps {
  dialogProps: DialogProps;
  header?: React.ReactNode | JSX.Element;
  content?: React.ReactNode | JSX.Element;
  footer?: React.ReactNode | JSX.Element;
}