import React from 'react'

// COMPONENTS
import Button from '@/components/atoms/control/Button'
import DataGridTableFree from '.'

// MUIS
import Stack from '@mui/material/Stack'

const Example = () => {
  // states
  const [currentPage, setCurrentPage] = React.useState<number>(0)
  const [modeFilter, setModeFilter] = React.useState<boolean>(false)
  const [dataFilters, setDataFilters] = React.useState<{[key: string]: string | number | boolean}>({})
  const [pageSize, setPageSize] = React.useState<number>(5)
  const [sortOn, setSortOn] = React.useState<string>('')
  const [sortModel, setSortModel] = React.useState<'asc' | 'desc' | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedColumns, setSelectedColumns] = React.useState([
    { field: 'name' },
    { field: 'email' },
    { field: 'country' }
  ])
  
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
          selectedColumns={selectedColumns}
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

export default Example