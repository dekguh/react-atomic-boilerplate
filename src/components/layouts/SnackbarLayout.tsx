import React from 'react'

// COMPONENTS
import Snackbar from '../molecules/Snackbar'

// MUIS
import { SnackbarCloseReason } from '@mui/material/Snackbar'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { selectSnackbarState, setIsOpenSnackbar } from '@/store/slice/snackbarSlice'

interface ISnackbarLayoutProps {
  children: React.ReactNode | JSX.Element
}

const SnackbarLayout : React.FC<ISnackbarLayoutProps> = (props) => {
  const { children } = props
  const dispatch = useDispatch()
  const snackbarState = useSelector(selectSnackbarState)

  const handleSnackbarClose = (event : Event | React.SyntheticEvent<any, Event>, reason : SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(setIsOpenSnackbar(false))
  }

  return (
    <>
      <Snackbar
        onClose={handleSnackbarClose}
        autoHideDuration={6000}
        title={snackbarState.title}
        message={snackbarState.message}
        severity={snackbarState.severity}
        open={snackbarState.isOpen}
      />
      {children}
    </>
  )
}

export default SnackbarLayout