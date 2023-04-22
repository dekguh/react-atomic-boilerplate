import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import TextField from '.'

export default {
  title: 'Atoms/Input/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [TextField](https://mui.com/material-ui/react-text-field)'
      }
    }
  }
} as Meta<typeof TextField>

const Story : StoryFn<typeof TextField> = (args) => <TextField {...args}/>

// OUTLINED
export const Outlined = Story.bind({})
Outlined.args = {
  label: 'Label',
  size: 'medium',
  variant: 'outlined'
}

// FILLED
export const Filled = Story.bind({})
Filled.args = {
  label: 'Label',
  size: 'medium',
  variant: 'filled'
}