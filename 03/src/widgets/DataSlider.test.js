import React from 'react'
import DataSlider from './DateSlider'
import { fireEvent, render } from '@testing-library/react'
import { solToDate, dateToSol } from '../services/sols'

describe('DateSlider', () => {
  describe('render', () => {
    it('should return a container', () => {
      const {container} = render(
        <DataSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      )
      expect(container).toBeDefined()
      expect(container.outerHTML).toBe("<div><div class=\"Dateslider\"><div class=\"row\"><div class=\"col-12\" style=\"text-align: center;\"><label for=\"date\">Earth Day</label><p class=\"Dateslider-date\" data-testid=\"date-label\">2017-5-3</p></div></div><div class=\"row\"><div class=\"col-3\" style=\"text-align: right;\"><small>2004-01-05</small></div><div class=\"col-6 form-group\"><input data-testid=\"date-slider\" type=\"range\" id=\"date\" class=\"form-control\" min=\"1\" max=\"5746\" value=\"4868\"></div><div class=\"col-3\"><small>2019-09-28</small></div></div></div></div>")
    })
    it('should display the correct date', () => {
      const {getByTestId} = render (
        <DataSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      )
      const date = getByTestId('date-label')
      expect(date).toHaveTextContent("2017-5-3")
    })
    it('should have the correct slider position', () => {
      const {getByTestId} = render (
        <DataSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      )
      const input = getByTestId('date-slider')
      expect(input).toHaveValue(dateToSol("2017-5-3").toString())
    })
  })

  describe('change', () => {
    it('should publish the selected date', () => {
      const fn = jest.fn()
      const {getByTestId} = render (
        <DataSlider earth_date="2017-5-3" onDateChanged={fn} />
      )
      const input = getByTestId('date-slider')
      fireEvent.change(input, {target: {value: '3877'}})
      expect(fn.mock.calls).toEqual([
        [solToDate(3877)]
      ])
    })
  })
})