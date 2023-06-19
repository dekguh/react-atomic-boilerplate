import React from 'react'

// STORYBOOK
import { StoryFn, Meta } from '@storybook/react'

// COMPONENTS
import DataGridTableFree from '.'
import { default as ExampleTable } from './Example'

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

export const Example : StoryFn<typeof DataGridTableFree> = () => <ExampleTable />

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