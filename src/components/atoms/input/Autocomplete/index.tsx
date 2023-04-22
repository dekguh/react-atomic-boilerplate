import React from 'react'

// MUIS
import AutocompleteMUI, { AutocompleteProps } from '@mui/material/Autocomplete'

// COMPONENTS
import TextField from '@/components/atoms/input/TextField'

const Autocomplete : React.FC<AutocompleteProps<string, false, false, false> & {label?: string;}> = (props) => {
  return (
    <AutocompleteMUI
      {...props}
      ListboxProps={{
        style: {
          fontSize: 14,
        }
      }}
      renderInput={(params) => <TextField {...params} label={props.label}/>}
    />
  )
}

export default Autocomplete