import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Checkbox from '.'

export default {
  title: 'Atoms/Input/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Checkbox](https://mui.com/material-ui/api/checkbox/)'
      }
    }
  }
} as Meta<typeof Checkbox>

export const Example : StoryFn<typeof Checkbox> = (args) => <Checkbox {...args}/> 