import React, { ChangeEvent, MouseEventHandler } from 'react'

// MUIS
import ButtonIcon from '../../atoms/control/ButtonIcon'
import Stack from '@mui/material/Stack'

// MUI ICONS
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import SortIcon from '@mui/icons-material/Sort'

// TYPES
import { IFilterAndSortComponentProps } from './types'

export const FilterAndSortComponent : React.FC<IFilterAndSortComponentProps> = (props) => {
  const { params, children, modeFilter, showSorting, sortModel, setSortModel, sortOn, setSortOn, testIdBtnSort } = props
  
  // handle button sort click
  const handleSortClick : MouseEventHandler = () : void => {
    if(!setSortModel || !setSortOn) return
    if(sortOn !== params.colDef.field) {
      setSortModel('asc')
      setSortOn(params.colDef.field)
      return
    }
    setSortOn(params.colDef.field)

    if(sortModel === null) setSortModel('asc')
    else if(sortModel === 'asc') setSortModel('desc')
    else setSortModel(null)
  }

  return (
    <>
      {(modeFilter && children && params.colDef.isFilter) ? (
        <Stack width='100%' marginRight={'8px'}>
          {children}
        </Stack>
      ) : <Stack width='100%' marginRight={'8px'}>{params.colDef.headerName}</Stack>}
      {showSorting && (
        <ButtonIcon data-testid={testIdBtnSort} onClick={handleSortClick} size='small'>
          {(sortModel === null || sortOn !== params.colDef.field) && <SortIcon />}
          {(sortModel === 'asc' && sortOn === params.colDef.field) && <ArrowUpwardIcon />}
          {(sortModel === 'desc' && sortOn === params.colDef.field) && <ArrowDownwardIcon />}
        </ButtonIcon>
      )}
    </>
  )
}

// handle input filters
export const handleFilterChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  name: string,
  dataFilters?: {[key: string]: string | number | boolean},
  setDataFilters?: React.Dispatch<React.SetStateAction<{[key: string]: string | number | boolean}>>
) : void => {
  if(!dataFilters || !setDataFilters) return
  const temp = dataFilters
  temp[name] = event.target.value
  if(!event.target.value) delete temp[name]
  setDataFilters({...temp})
}