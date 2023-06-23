import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Typography from '.'

export default {
  title: 'Atoms/Text/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Typography](https://mui.com/material-ui/react-typography)'
      }
    }
  }
} as Meta<typeof Typography>

const Story : StoryFn<typeof Typography> = (args) => <Typography {...args}/>

// HEADING
export const Heading = Story.bind({})
Heading.args = {
  children: 'Header',
  variant: 'h3'
}

// BODY
export const Body = Story.bind({})
Body.args = {
  children: 'Example of text description from typo component',
  variant: 'body2',
  color: 'text.secondary'
}