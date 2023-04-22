import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Select from '.'

// MUIS
import MenuItem from '@mui/material/MenuItem'

export default {
  title: 'Atoms/Input/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Select](https://mui.com/material-ui/react-select)'
      }
    }
  }
} as Meta<typeof Select>

export const Example : StoryFn<typeof Select> = (args) => (
  <Select fullWidth {...args}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
)
