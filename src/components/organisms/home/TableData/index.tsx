import React, { useState } from 'react'

// COMPONENTS
import DataGridTableFree from '@/components/molecules/DataGridTableFree'
import { IDataGridTableFreeProps } from '@/components/molecules/DataGridTableFree/types'

interface ITableDataProps extends Pick<IDataGridTableFreeProps, 'modeFilter' | 'selectedColumns'> {
  dataRows: Array<{[key: string]: string | boolean | number | Array<string>}>
}

const TableData : React.FC<ITableDataProps> = (props) => {
  const { dataRows, modeFilter, selectedColumns } = props

  const [currentPage, setCurrentPage] = useState<number>(0)
  const [dataFilters, setDataFilters] = useState<{[key: string]: string | number | boolean}>({})
  const [pageSize, setPageSize] = useState<number>(5)
  const [sortOn, setSortOn] = useState<string>('')
  const [sortModel, setSortModel] = useState<'asc' | 'desc' | null>(null)

  const initColumns = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      isFilter: true,
      hasSorting: true
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      isFilter: true,
      hasSorting: true
    }
  ]

  return (
    <DataGridTableFree
      dataGridProps={{}}
      initColumns={initColumns}
      initRows={dataRows}
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
  )
}

export default TableData