import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Divider from '.'

export default {
  title: 'Atoms/Elements/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Divider](https://mui.com/material-ui/react-divider)'
      }
    }
  }
} as Meta<typeof Divider>

const Story : StoryFn<typeof Divider> = (args) => <Divider {...args} />

// EXAMPLE
export const Example = Story.bind({})