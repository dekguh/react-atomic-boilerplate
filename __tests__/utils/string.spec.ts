import { hexToRgb } from '../../src/utils/string'

describe('string function utils', () => {
  it('hexToRgb should return rgb', () => {
    const testFunc = hexToRgb('#000000')
    expect(testFunc).toEqual('rgb(0, 0, 0)')
  })
})