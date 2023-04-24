import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import Tooltip from './index'
import Button from '@/components/atoms/control/Button'

export default {
  title: 'Atoms/Elements/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Tooltip](https://mui.com/material-ui/react-tooltip)'
      }
    }
  }
} as Meta<typeof Tooltip>

export const Example : StoryFn<typeof Tooltip> = () => (
  <Tooltip title='example' placement='top'>
    <Button>see tooltip</Button>
  </Tooltip>
)