import React from 'react'
import LoadingBackdrop, { ILoadingBackdropProps } from '../molecules/LoadingBackdrop'

interface IDashboardLayout extends ILoadingBackdropProps {
  children: React.ReactNode | JSX.Element;
}

const DashboardLayout : React.FC<IDashboardLayout> = (props) => {
  const { children, isOpen } = props

  return (
    <>
      <LoadingBackdrop
        isOpen={isOpen}
      />

      {children}
    </>
  )
}

export default DashboardLayout