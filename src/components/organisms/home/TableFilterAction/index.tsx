import React from 'react'
import _ from 'lodash'

// COMPONENTS
import FormControlLabel from '@/components/atoms/control/FormControlLabel'
import Checkbox from '@/components/atoms/input/Checkbox'

// MUIS
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

interface ITableFilterActionProps {
    setModeFilter: React.Dispatch<React.SetStateAction<boolean>>;
    modeFilter: boolean;
    onCheckboxChange: (event: { key: string; value: boolean; }) => void;
    selectedColumns: Array<{ field: string; value: boolean; }>;
}

const TableFilterAction : React.FC<ITableFilterActionProps> = (props) => {
  const { modeFilter, setModeFilter, onCheckboxChange, selectedColumns } = props

  const handleCheckboxChange = (event : React.ChangeEvent<HTMLInputElement>, key : string) => {
    onCheckboxChange({ key, value: event.target.checked })
  }

  return (
    <Stack data-testid='TableFilterActionId'>
      <Button data-testid='btnModeFilterId' onClick={() => setModeFilter(!modeFilter)}>mode filter</Button>

      <Stack>
        <FormControlLabel
          label='Column Title'
          data-testid='checkboxTitleId'
          control={<Checkbox
            onChange={event => handleCheckboxChange(event, 'title')}
            checked={_.find(selectedColumns, { field: 'title' })?.value}
          />}
        />

        <FormControlLabel
          label='Column Description'
          data-testid='checkboxDescriptionId'
          control={<Checkbox
            onChange={event => handleCheckboxChange(event, 'description')}
            checked={_.find(selectedColumns, { field: 'description' })?.value}
          />}
        />
      </Stack>
    </Stack>
  )
}

export default TableFilterAction