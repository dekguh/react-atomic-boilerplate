import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Autocomplete from '.'

export default {
  title: 'Atoms/Input/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Autocomplete](https://mui.com/material-ui/react-autocomplete/)'
      }
    }
  }
} as Meta<typeof Autocomplete>

export const Example : StoryFn<typeof Autocomplete> = (args) => (
  <Autocomplete
    {...args}
    options={['kadek']}
    label='Label'
  />
)
