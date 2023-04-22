import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import Button from '.'

export default {
  title: 'Atoms/Control/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Button](https://mui.com/material-ui/react-button/)'
      }
    }
  }
} as Meta<typeof Button>

const Story : StoryFn<typeof Button> = (args) => <Button {...args}/>

// PRIMARY
export const Primary = Story.bind({})
Primary.args = {
  children: 'button',
  color: 'primary',
  variant: 'contained',
  size: 'large'
}

// SECONDARY
export const Secondary = Story.bind({})
Secondary.args = {
  children: 'button',
  color: 'secondary',
  variant: 'contained',
  size: 'large'
}