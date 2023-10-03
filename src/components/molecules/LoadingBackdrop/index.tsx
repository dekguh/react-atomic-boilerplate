import React from 'react'

// COMPONENTS
import Progress from '@/components/atoms/elements/Progress'

// MUIS
import Backdrop from '@mui/material/Backdrop'
import { useTheme } from '@mui/material/styles'

export interface ILoadingBackdropProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingBackdrop : React.FC<ILoadingBackdropProps> = (props) => {
  const { isOpen, setIsOpen } = props
  const theme = useTheme()

  return (
    <Backdrop
      open={isOpen}
      onClick={() => setIsOpen && setIsOpen(false)}
      sx={{
        zIndex: theme.zIndex.appBar
      }}
    >
      <Progress
        type='circular'
        circularProps={{
          color: 'primary'
        }}
      />
    </Backdrop>
  )
}

export default LoadingBackdrop