// MUI TYPES
import CircularProgressMUI, { CircularProgressProps } from '@mui/material/CircularProgress'
import LinearProgressMUI, { LinearProgressProps } from '@mui/material/LinearProgress'

export interface IProgressProps {
  type: 'circular' | 'linear';
  circularProps?: CircularProgressProps;
  linearProps?: LinearProgressProps;
}