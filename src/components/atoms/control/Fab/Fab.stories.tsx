import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import Fab from '.'

// MUI ICON
import MapIcon from '@mui/icons-material/Map'

export default {
  title: 'Atoms/Control/Fab',
  component: Fab,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Fab](https://mui.com/material-ui/react-floating-action-button/)'
      }
    }
  }
} as Meta<typeof Fab>

const Story : StoryFn<typeof Fab> = (args) => <Fab {...args}/>

// TEXT
export const Text = Story.bind({})
Text.args = {
  children: 'button',
  color: 'primary',
  size: 'large'
}

// ICON
export const Icon = Story.bind({})
Icon.args = {
  children: <MapIcon fontSize='small'/>,
  color: 'primary',
  size: 'small',
}