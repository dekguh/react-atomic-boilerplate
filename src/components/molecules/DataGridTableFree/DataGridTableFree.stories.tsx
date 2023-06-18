import React from 'react'

// STORYBOOK
import { StoryFn, Meta } from '@storybook/react'

// COMPONENTS
import Button from '@/components/atoms/control/Button'
import DataGridTableFree from '.'

// MUIS
import Stack from '@mui/material/Stack'

// TESTING
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Molecules/DataGrid/DataGridTableFree',
  component: DataGridTableFree,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Data Grid Free](https://mui.com/x/react-data-grid)'
      }
    }
  }
} as Meta<typeof DataGridTableFree>

export const Example : StoryFn<typeof DataGridTableFree> = () => {
  // states
  const [currentPage, setCurrentPage] = React.useState<number>(0)
  const [modeFilter, setModeFilter] = React.useState<boolean>(false)
  const [dataFilters, setDataFilters] = React.useState<{[key: string]: string | number | boolean}>({})
  const [pageSize, setPageSize] = React.useState<number>(5)
  const [sortOn, setSortOn] = React.useState<string>('')
  const [sortModel, setSortModel] = React.useState<'asc' | 'desc' | null>(null)

  const initColumns = [
    {
      field: 'name',
      headerName: 'Nama',
      flex: 1,
      isFilter: true,
      hasSorting: true,
    },
    {
      field: 'country',
      headerName: 'Negara',
      flex: 1,
      isFilter: true,
      hasSorting: false,
    },
    {
      field: 'email',
      headerName: 'email',
      flex: 1,
      isFilter: false,
      hasSorting: false,
    }
  ]

  return (
    <Stack sx={{ height: '100vh' }}>
      <Button
        data-testid='button-mode-filter'
        sx={{marginBottom: 4 }}
        variant='contained'
        onClick={() => setModeFilter(!modeFilter)}
      >
        mode filter
      </Button>

      <Stack flex={1}>
        <DataGridTableFree
          dataGridProps={{}}
          initColumns={initColumns}
          initRows={[
            { id: 1, name: 'kadek', country: 'indonesia', email: 'yahoo' },
            { id: 2, name: 'wayan', country: 'bali', email: 'gmail' },
            { id: 3, name: 'made', country: 'jakarta', email: 'yahoo' },
            { id: 4, name: 'nyoman', country: 'surabaya', email: 'hotmail' },
            { id: 5, name: 'i nyoman', country: 'surabaya', email: 'gmail' },
            { id: 6, name: 'ni nyoman', country: 'bali', email: 'hotmail' },
          ]}
          selectedColumns={[
            { field: 'name' },
            { field: 'email' }
          ]}
          modeFilter={modeFilter}
          showSorting={true}
          dataFilters={dataFilters}
          setDataFilters={setDataFilters}
          pageSize={pageSize}
          setPageSize={setPageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          sortOn={sortOn}
          setSortOn={setSortOn}
          sortModel={sortModel}
          setSortModel={setSortModel}
          filterOnApi={false}
        />
      </Stack>
    </Stack>
  )
}

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // active mode filter
  await userEvent.click(canvas.getByTestId('button-mode-filter'))

  // button sort name click (ASC)
  await userEvent.click(canvas.getByTestId('button-sort-1'))

  // button sort name click (DESC)
  await userEvent.click(canvas.getByTestId('button-sort-1'))

  // button sort name click (NO SORT)
  await userEvent.click(canvas.getByTestId('button-sort-1'))

  // input search name
  await userEvent.type(canvas.getByTestId('input-filter-1'), 'kadek')

  // nonactive mode filter
  await userEvent.click(canvas.getByTestId('button-mode-filter'))
}