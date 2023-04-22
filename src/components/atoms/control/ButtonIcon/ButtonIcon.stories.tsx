import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import ButtonIcon from '.'

// ICON
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

export default {
  title: 'Atoms/Control/Button Icon',
  component: ButtonIcon
} as Meta<typeof ButtonIcon>

const Story : StoryFn<typeof ButtonIcon> = (args) => <ButtonIcon {...args}/>

// PRIMARY
export const Primary = Story.bind({})
Primary.args = {
  children: <NotificationsActiveIcon />,
  color: 'primary',
  size: 'large'
}

// SECONDARY
export const Secondary = Story.bind({})
Secondary.args = {
  children: <NotificationsActiveIcon />,
  color: 'secondary',
  size: 'large'
}