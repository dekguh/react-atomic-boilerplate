import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import Paper from './index'

export default {
  title: 'Atoms/Elements/Paper',
  component: Paper,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Paper](https://mui.com/material-ui/react-paper)'
      }
    }
  }
} as Meta<typeof Paper>

const Story : StoryFn<typeof Paper> = (args) => <Paper {...args} />

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  children: 'example',
  elevation: 1,
}