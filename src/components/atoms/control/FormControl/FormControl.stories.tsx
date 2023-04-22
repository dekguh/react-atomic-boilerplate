import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import FormControl from '.'
import Select from '@/components/atoms/input/Select'

// MUIS
import MenuItem from '@mui/material/MenuItem'

export default {
  title: 'Atoms/Control/Form Control',
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Form Control](https://mui.com/material-ui/api/form-control)'
      }
    }
  }
} as Meta<typeof FormControl>

export const Story : StoryFn<typeof FormControl> = () => (
  <FormControl
    controlProps={{
      fullWidth: true,
    }}
    labelProps={{
      children: 'Label',
    }}
    helperProps={{
      children: 'helper text'
    }}
  >
    <Select fullWidth label='label'>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
)

