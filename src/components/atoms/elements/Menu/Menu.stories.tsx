import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Menu from '.'
import Button from '@/components/atoms/control/Button'

// MUIS
import MenuItem from '@mui/material/MenuItem'

export default {
  title: 'Atoms/Elements/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Menu](https://mui.com/material-ui/react-menu)'
      }
    }
  }
} as Meta<typeof Menu>

export const Example : StoryFn<typeof Menu> = () => {
  const [anchorRef, setAnchorRef] = React.useState<null | HTMLElement>()
  return (
    <>
      <Button
        variant='contained'
        onClick={(event) => setAnchorRef(event.currentTarget)}
      >
        show me
      </Button>

      <Menu open={Boolean(anchorRef)} anchorEl={anchorRef} onClose={() => setAnchorRef(null)}>
        <MenuItem>value</MenuItem>
      </Menu>
    </>
  )
}