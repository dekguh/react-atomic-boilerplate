import React, { SetStateAction } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TableFilterAction from '@/components/organisms/home/TableFilterAction'

describe('TableFilterAction integration testing', () => {
  test('TableFilterAction is rendered', () => {
    render(<TableFilterAction
      setModeFilter={() => null}
      modeFilter={true}
      onCheckboxChange={() => null}
      selectedColumns={[{ field: 'title', value: true }, { field: 'description', value: true }]}
    />)

    expect(screen.getByTestId('TableFilterActionId')).toBeInTheDocument()
    expect(screen.getByTestId('btnModeFilterId')).toBeInTheDocument()
    expect(screen.getByTestId('checkboxTitleId')).toBeInTheDocument()
    expect(screen.getByTestId('checkboxDescriptionId')).toBeInTheDocument()
  })

  test('props onCheckboxChange should return value of checkboxes', () => {
    let tempEvent = {}
    const { container } = render(<TableFilterAction
      setModeFilter={() => null}
      modeFilter={true}
      onCheckboxChange={event => tempEvent = event}
      selectedColumns={[{ field: 'title', value: true }, { field: 'description', value: true }]}
    />)

    const checkboxTitle = container.querySelector('[data-testid="checkboxTitleId"]')?.querySelector('input[type="checkbox"]') as Document | Node | Element | Window
    fireEvent.click(checkboxTitle)
    expect(tempEvent).toEqual({ key: 'title', value: false })
  })

  test('props setModeFilter should return value boolean when button mode filter is clicked', () => {
    let tempValue : SetStateAction<boolean> = false
    render(<TableFilterAction
      setModeFilter={value => {
        tempValue = value
        return null
      }}
      modeFilter={false}
      onCheckboxChange={() => null}
      selectedColumns={[{ field: 'title', value: true }, { field: 'description', value: true }]}
    />)

    fireEvent.click(screen.getByTestId('btnModeFilterId'))
    expect(tempValue).toEqual(true)
  })
})