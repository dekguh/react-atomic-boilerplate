// MUI TYPES
import { CircularProgressProps } from '@mui/material/CircularProgress'
import { LinearProgressProps } from '@mui/material/LinearProgress'

export interface IProgressProps {
  type: 'circular' | 'linear';
  circularProps?: CircularProgressProps;
  linearProps?: LinearProgressProps;
}