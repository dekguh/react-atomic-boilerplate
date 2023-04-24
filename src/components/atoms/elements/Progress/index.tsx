import React from 'react'

// MUIS
import CircularProgressMUI, { CircularProgressProps } from '@mui/material/CircularProgress'
import LinearProgressMUI, { LinearProgressProps } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

// TYPES
import { IProgressProps } from './types'

const StyledCircularProgress = styled(CircularProgressMUI)<CircularProgressProps>()

const StyledLinearProgress = styled(LinearProgressMUI)<LinearProgressProps>()

const Progress : React.FC<IProgressProps> = (props) => {
  const { circularProps, linearProps, type } = props

  if(type === 'circular') return (
    <StyledCircularProgress {...circularProps}/>
  )
  else return (
    <StyledLinearProgress {...linearProps}/>
  )
}

export default Progress