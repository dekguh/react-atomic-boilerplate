import React from 'react'
import { render } from '@testing-library/react'
import Progress from '@/components/atoms/elements/Progress'
import { IProgressProps } from '@/components/atoms/elements/Progress/types'

const MockedProgress = ({ type, ...rest } : IProgressProps) => {
  return <Progress
    {...rest}
    type={type}
  />
}

describe('Progress unit testing', () => {
  test('Circular progress rendered', () => {
    const { container } = render(<MockedProgress type='circular' circularProps={{
      color: 'primary'
    }} />)
    expect(container.querySelector('.MuiCircularProgress-root')).toBeInstanceOf(HTMLElement)
  })

  test('Linear progress rendered', () => {
    const { container } = render(<MockedProgress type='linear' linearProps={{
      color: 'primary'
    }} />)
    expect(container.querySelector('.MuiLinearProgress-root')).toBeInstanceOf(HTMLElement)
  })
})