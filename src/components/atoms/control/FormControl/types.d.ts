// MUIS
import { FormControlProps } from '@mui/material/FormControl'
import { FormHelperTextProps } from '@mui/material/FormHelperText'
import { InputLabelProps } from '@mui/material/InputLabel'

export interface IFormControlProps {
    controlProps?: FormControlProps;
    labelProps?: InputLabelProps;
    helperProps?: FormHelperTextProps;
    children: React.ReactNode | JSX.Element;
}