import { sum } from './'

test('My function sum', () => {
  const result = sum(3,7)
  expect(result).toBe(10)
})