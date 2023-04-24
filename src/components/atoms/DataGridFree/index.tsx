import React from 'react'

// MUIS
import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import  { styled } from '@mui/material/styles'

const StyledDataGridFree = styled(DataGrid)<DataGridProps>({
  // HEADER
  '& .MuiDataGrid-columnHeaderTitleContainerContent': {
    flex: 1,
    width: '100%',
  }
})

const DataGridFree : React.FC<DataGridProps> = (props) => {
  return (
    <StyledDataGridFree {...props}/>
  )
}

export default DataGridFree