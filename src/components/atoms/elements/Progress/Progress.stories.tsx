import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import Progress from './index'

export default {
  title: 'Atoms/Elements/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Progress](https://mui.com/material-ui/react-progress)'
      }
    }
  }
} as Meta<typeof Progress>

const Story : StoryFn<typeof Progress> = (args) => <Progress {...args} />

// circular
export const CircularProgress = Story.bind({})
CircularProgress.args = {
  circularProps: {
    color: 'primary'
  },
  type: 'circular'
}

// linear
export const LinearProgress = Story.bind({})
LinearProgress.args = {
  linearProps: {
    color: 'primary'
  },
  type: 'linear'
}