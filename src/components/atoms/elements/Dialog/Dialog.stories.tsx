import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Dialog from '.'

export default {
  title: 'Atoms/Elements/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Dialog](https://mui.com/material-ui/react-dialog)'
      }
    }
  }
} as Meta<typeof Dialog>

const Story : StoryFn<typeof Dialog> = (args) => <Dialog {...args} />

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  dialogProps: {
    open: true,
  },
  header: 'header',
  content: 'content',
  footer: 'action footer'
}
