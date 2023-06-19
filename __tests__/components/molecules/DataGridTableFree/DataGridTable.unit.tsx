import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Example from '@/components/molecules/DataGridTableFree/Example'

describe('DataGridTableFree unit testing', () => {
  test('DataGridTableFree is rendered', () => {
    render(<Example />)
    expect(screen.getByRole('grid')).toBeDefined()
  })

  test('button sort should sorting A-Z and Z - A', () => {
    const { container } = render(<Example />)
    // sort A - Z
    fireEvent.click(screen.getByTestId('button-sort-1'))
    expect(container?.querySelector('[data-rowindex="0"]')?.innerHTML.includes('i nyoman')).toBe(true)

    // sort Z - A
    fireEvent.click(screen.getByTestId('button-sort-1'))
    expect(container?.querySelector('[data-rowindex="0"]')?.innerHTML.includes('wayan')).toBe(true)
  })

  test('can input filter textfield', () => {
    const { container } = render(<Example />)

    fireEvent.click(screen.getByTestId('button-mode-filter'))
    fireEvent.change(screen.getByTestId('input-filter-1'), { target: { value: 'made' }})
    expect(container?.querySelector('[data-rowindex="0"]')?.innerHTML.includes('made')).toBe(true)
    fireEvent.change(screen.getByTestId('input-filter-1'), { target: { value: '' }})
    expect(container?.querySelector('[data-rowindex="0"]')?.innerHTML.includes('kadek')).toBe(true)
  })
})