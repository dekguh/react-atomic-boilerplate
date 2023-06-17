import React from 'react'
import { render, screen } from '@testing-library/react'
import Alert from '@/components/atoms/elements/Alert'

describe('Alert unit testing', () => {
  test('Alert is rendered & can add the alertProps', () => {
    const { container } = render(<Alert alertProps={{ severity: 'error' }}>alert rendered</Alert>)

    expect(screen.getByText('alert rendered')).toBeDefined()
    expect(container.firstElementChild?.className?.includes('MuiAlert-standardError')).toBe(true)
  })

  test('Alert can add the alertTitleProps', () => {
    render(<Alert
      alertProps={{ severity: 'error' }}
      alertTitleProps={{ children: 'title rendered' }}
    >alert rendered</Alert>)

    expect(screen.getByText('title rendered')).toBeDefined()
  })
})