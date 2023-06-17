import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import DialogSide from '.'
import ExampleComponent from './Example'


export default {
  title: 'Atoms/Elements/Dialog Side',
  component: DialogSide,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Backdrop](https://mui.com/material-ui/react-backdrop) & [Slide](https://mui.com/material-ui/react-slide)'
      }
    }
  }
} as Meta<typeof DialogSide>

export const Example : StoryFn<typeof DialogSide> = () => <ExampleComponent />