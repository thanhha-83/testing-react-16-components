import React from 'react'
import TestRenderer from 'react-test-renderer'
import RoverSelector from './RoverSelector'
import { rovers } from '../pages/ConnectedRoverSearch'

describe('RoverSelector', () => {
  describe('rendering', () => {
    describe('selection', () => {
      describe('all selected', () => {
        it('should select all the rovers', () => {
          const all = {spirit: true, opportunity: true, curiosity: true};
          const tr = TestRenderer.create(
            <RoverSelector
              roversActive={all}
              rovers={rovers}
              roverSelection={all}
              onRoverSelection={()=>{}}
            />
          )
          const inputs = tr.root.findAllByProps({"data-testid": 'rover-selected'})
          inputs.forEach((input) => {
              expect(input.props.checked).toBe(true)
          })
        })
      })
      describe('none selected', () => {
        it('should select no rovers', () => {
            const none = {spirit: false, opportunity: false, curiosity: false}
            const tr = TestRenderer.create(
              <RoverSelector
                roversActive={none}
                rovers={rovers}
                roverSelection={none}
                onRoverSelection={()=>{}}
              />
            )
            const inputs = tr.root.findAllByProps({"data-testid": 'rover-selected'})
            inputs.forEach((input) => {
                expect(input.props.checked).toBe(false)
            })
        });
    });
    })
  })
})