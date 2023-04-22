import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Switch from '.'

export default {
  title: 'Atoms/Input/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Switch](https://mui.com/material-ui/api/switch/)'
      }
    }
  }
} as Meta<typeof Switch>

export const Example : StoryFn<typeof Switch> = (args) => <Switch {...args}/> 