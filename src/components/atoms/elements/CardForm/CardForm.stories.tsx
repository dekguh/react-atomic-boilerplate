import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import CardForm from '.'

export default {
  title: 'Atoms/Elements/CardForm',
  component: CardForm,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Chip](https://mui.com/material-ui/react-stack)'
      }
    }
  }
} as Meta<typeof CardForm>

export const Example : StoryFn<typeof CardForm> = (args) => <CardForm {...args}>test</CardForm>