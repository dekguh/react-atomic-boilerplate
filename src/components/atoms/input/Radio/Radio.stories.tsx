import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Radio from '.'

export default {
  title: 'Atoms/Input/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Checkbox](https://mui.com/material-ui/api/radio/)'
      }
    }
  }
} as Meta<typeof Radio>

export const Example : StoryFn<typeof Radio> = (args) => <Radio {...args}/> 