/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'

// COMPONENTS
import DataGridFree from '@/components/atoms/DataGridFree'

// LIBRARY
import _ from 'lodash'

// MUIS
import TextField from '@/components/atoms/input/TextField'

// STYLES
import useStyles from './useStyles'

// TYPES
import { IDataGridTableFreeProps, TTableColumn } from './types'

// UTILS
import { FilterAndSortComponent, handleFilterChange } from './utils'

/**
 * to-do feature
 * input filter on header column (done)
 * show only selected column (done)
 * button sorting on header column (done)
 * mode filter (done)
 */
const DataGridTableFree : React.FC<IDataGridTableFreeProps> = (props) => {
  const {
    dataGridProps, modeFilter, showSorting, initColumns, initRows, selectedColumns,
    dataFilters, setDataFilters, pageSize, currentPage, setPageSize, setCurrentPage,
    sortOn, setSortOn, sortModel, setSortModel, filterOnApi
  } = props

  // styles
  const { classes } = useStyles()

  // states
  const [columns, setColumns] = useState<TTableColumn>(initColumns)
  const [rows, setRows] = useState(initRows)

  // side effect filter mode & selected columns
  useEffect(() => {
    // set selected columns
    if(selectedColumns?.length) {
      // use 'field' as key filter
      setColumns(_.intersectionBy(initColumns, selectedColumns, 'field'))
    }

    // set filter input and sort button
    const showInputFilter : TTableColumn = columns.map((item: any, index: number) => {
      return {
        ...item,
        sortable: false,
        renderHeader: (params: any) => (
          <FilterAndSortComponent
            params={params}
            modeFilter={modeFilter}
            showSorting={item.hasSorting ? showSorting : false}
            sortModel={sortModel}
            setSortModel={setSortModel}
            sortOn={sortOn}
            setSortOn={setSortOn}
            testIdBtnSort={`button-sort-${index+1}`}
          >
            <TextField
              label={params?.colDef?.headerName}
              size='small'
              fullWidth
              onChange={(event) => handleFilterChange(event, params.field, dataFilters, setDataFilters)}
              inputProps={{
                'data-testid': `input-filter-${index+1}`
              }}
            />
          </FilterAndSortComponent>
        )
      }
    })
    setColumns(showInputFilter)

    // if modeFilter false, reset all
    if(!modeFilter) {
      const resetDataFilters = {}
      setDataFilters && setDataFilters(resetDataFilters)
    }
  }, [modeFilter, sortOn, sortModel])

  // side effect filter
  useEffect(() => {
    // if you want filter from api, dont pass value to props dataFilters
    if(!filterOnApi && dataFilters) {
      const result = _.filter(initRows, (item) => {
        let isFound = true
        for(const key of Object.keys(dataFilters)) {
          if (_.includes(item[key], dataFilters[key])) isFound = true
          else {
            isFound = false
            break
          }
        }
        
        return isFound
      })

      setRows(result)
    }
  }, [dataFilters])

  return (
    <DataGridFree
      // initialize
      {...dataGridProps}
      className={classes.root}
      columns={columns}
      rows={rows}
      rowsPerPageOptions={[25, 50, 100]}
      pageSize={pageSize}
      page={currentPage}
      // sort
      sortModel={!filterOnApi ? [{ field: sortModel ? sortOn : '', sort: sortModel }] : []}
      // disable / enable
      disableColumnFilter
      disableColumnMenu
      // on action
      onPageSizeChange={(pageSize: number) => setPageSize && setPageSize(pageSize)}
      onPageChange={(page: number) => setCurrentPage && setCurrentPage(page)}
    />
  )
}

DataGridTableFree.defaultProps = {
  filterOnApi: false,
}

export default DataGridTableFree