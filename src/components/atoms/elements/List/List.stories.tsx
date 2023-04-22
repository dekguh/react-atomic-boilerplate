import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENT
import List from './index'

// MUIS
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export default {
  title: 'Atoms/Elements/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [List](https://mui.com/material-ui/react-list)'
      }
    }
  }
} as Meta<typeof List>

const Story : StoryFn<typeof List> = (args) => <List {...args} />

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  children: (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary='Trash' />
      </ListItemButton>
    </ListItem>
  )
}