import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Example from '@/components/atoms/elements/DialogSide/Example'

describe('DialogSide unit testing', () => {
  test('Dialog rendered', () => {
    const { container } = render(<Example />)

    fireEvent.click(screen.getByRole('buttonDialog'))
    expect(container.querySelector('.isOpened')).toBeInstanceOf(HTMLElement)
  })

  test('Dialog open and close', () => {
    const { container } = render(<Example />)

    fireEvent.click(screen.getByRole('buttonDialog'))
    expect(container.querySelector('.isOpened')).toBeInstanceOf(HTMLElement)
    fireEvent.click(container.querySelector('[role="buttonClose"]') as Element | Node | Document | Window)
    expect(container.querySelector('.isClosed')).toBeInstanceOf(HTMLElement)
  })
})