import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import LoadingBackdrop from '.'

export default {
  title: 'Molecules/LoadingBackdrop',
  component: LoadingBackdrop,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Backdrop](https://mui.com/material-ui/react-backdrop/)'
      }
    }
  }
} as Meta<typeof LoadingBackdrop>

export const Example : StoryFn<typeof LoadingBackdrop> = () => <LoadingBackdrop
  isOpen={true}
/>
