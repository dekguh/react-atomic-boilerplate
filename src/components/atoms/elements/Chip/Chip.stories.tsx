import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Chip from '.'

export default {
  title: 'Atoms/Elements/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Chip](https://mui.com/material-ui/react-chip)'
      }
    }
  }
} as Meta<typeof Chip>

const Story : StoryFn<typeof Chip> = (args) => <Chip {...args} />

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  label: 'Label'
}
