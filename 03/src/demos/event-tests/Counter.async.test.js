import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import CounterAsync from './Counter.async'

describe('Counter', () => {
  it('shout start at zero', () => {
    const {queryByText} = render(
      <CounterAsync/>
    )
    const paragraph = queryByText(/ah ah ah/)
    expect(paragraph).toBeTruthy()
    expect(paragraph.textContent).toBe('0 ah ah ah')
  })
  it('should increment on click', () => {
    const {queryByText} = render(
      <CounterAsync/>
    )
    const paragraph = queryByText(/ah ah ah/)
    fireEvent.click(paragraph)
    wait(() => {
      expect(paragraph.textContent).toBe('1 ah ah ah')
    })
    fireEvent.click(paragraph)
    wait(() => {
      expect(paragraph.textContent).toBe('2 ah ah ah')
    })
  })
})