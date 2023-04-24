import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import Badge from './index'

// ICON
import MailIcon from '@mui/icons-material/Mail'

export default {
  title: 'Atoms/Elements/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Badge](https://mui.com/material-ui/react-badge)'
      }
    }
  }
} as Meta<typeof Badge>

const Story : StoryFn<typeof Badge> = (args) => <Badge {...args} />

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  children: <MailIcon />,
  color: 'primary',
  badgeContent: 1,
}