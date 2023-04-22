import React from 'react'

// MUIS
import SelectMUI, { SelectProps } from '@mui/material/Select'
import { styled } from '@mui/material/styles'

const StyledSelect = styled(SelectMUI)<SelectProps>({
  fontSize: 14,
})

const Select : React.FC<SelectProps> = (props) => {
  return(
    <StyledSelect
      {...props}
      MenuProps={{
        sx: {
          fontSize: 14,
          '& .MuiMenuItem-root': {
            fontSize: 14,
          }
        }
      }}
    />
  )
}

export default Select