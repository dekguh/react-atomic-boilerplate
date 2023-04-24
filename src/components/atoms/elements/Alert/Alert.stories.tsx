import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Alert from '.'

export default {
  title: 'Atoms/Elements/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Alert](https://mui.com/material-ui/react-alert)'
      }
    }
  }
} as Meta<typeof Alert>

const Story : StoryFn<typeof Alert> = (args) => <Alert {...args} />

// ERROR
export const Error = Story.bind({})
Error.args = {
  alertProps: {
    severity: 'error'
  },
  alertTitleProps: {
    children: 'Title'
  },
  children: 'example error message'
}
