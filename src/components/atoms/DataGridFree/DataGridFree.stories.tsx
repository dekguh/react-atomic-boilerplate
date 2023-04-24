import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import DataGridFree from '.'

// MUIS
import Stack from '@mui/material/Stack'

export default {
  title: 'Atoms/DataGrid/DataGridFree',
  component: DataGridFree,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Data Grid Free](https://mui.com/x/react-data-grid)'
      }
    }
  }
} as Meta<typeof DataGridFree>

export const Example : StoryFn<typeof DataGridFree> = () => {
  const columns = [
    {
      field: 'name',
      headerName: 'Nama'
    }
  ]
  return (
    <Stack sx={{
      height: '100vh'
    }}>
      <Stack flex={1}>
        <DataGridFree
          columns={columns}
          rows={[]}
        />
      </Stack>
    </Stack>
  )
}