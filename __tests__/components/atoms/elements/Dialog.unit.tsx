import React from 'react'
import { render, screen } from '@testing-library/react'
import Dialog from '@/components/atoms/elements/Dialog'

describe('Dialog unit testing', () => {
  test('Dialog is rendered & can add the dialogProps', () => {
    render(<Dialog dialogProps={{ open: true, role: 'dialogRendered' }}/>)
    expect(screen.getByRole('dialogRendered')).toBeDefined()
  })

  test('Dialog can add the header', () => {
    render(
      <Dialog
        dialogProps={{ open: true }}
        header={<div role='dialogHeader'>header</div>}
      />
    )
    expect(screen.getByRole('dialogHeader')).toBeDefined()
  })

  test('Dialog can add the content', () => {
    render(
      <Dialog
        dialogProps={{ open: true }}
        content={<div role='dialogContent'>content</div>}
      />
    )
    expect(screen.getByRole('dialogContent')).toBeDefined()
  })

  test('Dialog can add the footer', () => {
    render(
      <Dialog
        dialogProps={{ open: true }}
        footer={<div role='dialogFooter'>footer</div>}
      />
    )
    expect(screen.getByRole('dialogFooter')).toBeDefined()
  })
})