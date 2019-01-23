/* global describe, it, expect, beforeEach */
'use strict'

describe('Full Game Outcomes', () => {
  let scorecard
  let frameOne
  let frameTwo
  let frameThree
  let frameFour
  let frameFive
  let frameSix
  let frameSeven
  let frameEight
  let frameNine
  let frameTen

  beforeEach(() => {
    scorecard = new Scorecard()
    frameOne = new Frame()
    frameTwo = new Frame()
    frameThree = new Frame()
    frameFour = new Frame()
    frameFive = new Frame()
    frameSix = new Frame()
    frameSeven = new Frame()
    frameEight = new Frame()
    frameNine = new Frame()
    frameTen = new Frame()
  })

  describe('#gutter game', () => {
    it('calculates 0 score after 20 gutter balls', () => {
      frameOne.roll(0)
      frameOne.roll(0)
      scorecard.recordFrameScore(frameOne)
      frameTwo.roll(0)
      frameTwo.roll(0)
      scorecard.recordFrameScore(frameTwo)
      frameThree.roll(0)
      frameThree.roll(0)
      scorecard.recordFrameScore(frameThree)
      frameFour.roll(0)
      frameFour.roll(0)
      scorecard.recordFrameScore(frameFour)
      frameFive.roll(0)
      frameFive.roll(0)
      scorecard.recordFrameScore(frameFive)
      frameSix.roll(0)
      frameSix.roll(0)
      scorecard.recordFrameScore(frameSix)
      frameSeven.roll(0)
      frameSeven.roll(0)
      scorecard.recordFrameScore(frameSeven)
      frameEight.roll(0)
      frameEight.roll(0)
      scorecard.recordFrameScore(frameEight)
      frameNine.roll(0)
      frameNine.roll(0)
      scorecard.recordFrameScore(frameNine)
      frameTen.roll(0)
      frameTen.roll(0)
      scorecard.recordFrameScore(frameTen)
      scorecard.calculateTotal()
      expect(scorecard._total).toEqual(0)
    })
  })

  describe('#non-bonus scoring game', () => {
    it('calculates 80 score after rolling 4 20 times', () => {
      frameOne.roll(4)
      frameOne.roll(4)
      scorecard.recordFrameScore(frameOne)
      frameTwo.roll(4)
      frameTwo.roll(4)
      scorecard.recordFrameScore(frameTwo)
      frameThree.roll(4)
      frameThree.roll(4)
      scorecard.recordFrameScore(frameThree)
      frameFour.roll(4)
      frameFour.roll(4)
      scorecard.recordFrameScore(frameFour)
      frameFive.roll(4)
      frameFive.roll(4)
      scorecard.recordFrameScore(frameFive)
      frameSix.roll(4)
      frameSix.roll(4)
      scorecard.recordFrameScore(frameSix)
      frameSeven.roll(4)
      frameSeven.roll(4)
      scorecard.recordFrameScore(frameSeven)
      frameEight.roll(4)
      frameEight.roll(4)
      scorecard.recordFrameScore(frameEight)
      frameNine.roll(4)
      frameNine.roll(4)
      scorecard.recordFrameScore(frameNine)
      frameTen.roll(4)
      frameTen.roll(4)
      scorecard.recordFrameScore(frameTen)
      scorecard.calculateTotal()
      expect(scorecard._total).toEqual(80)
    })
  })

  describe('#spares game', () => {
    it('calculates 145 score after rolling 5 20 times', () => {
      frameOne.roll(5)
      frameOne.roll(5)
      scorecard.recordFrameScore(frameOne)
      frameTwo.roll(5)
      frameTwo.roll(5)
      scorecard.recordFrameScore(frameTwo)
      frameThree.roll(5)
      frameThree.roll(5)
      scorecard.recordFrameScore(frameThree)
      frameFour.roll(5)
      frameFour.roll(5)
      scorecard.recordFrameScore(frameFour)
      frameFive.roll(5)
      frameFive.roll(5)
      scorecard.recordFrameScore(frameFive)
      frameSix.roll(5)
      frameSix.roll(5)
      scorecard.recordFrameScore(frameSix)
      frameSeven.roll(5)
      frameSeven.roll(5)
      scorecard.recordFrameScore(frameSeven)
      frameEight.roll(5)
      frameEight.roll(5)
      scorecard.recordFrameScore(frameEight)
      frameNine.roll(5)
      frameNine.roll(5)
      scorecard.recordFrameScore(frameNine)
      frameTen.roll(5)
      frameTen.roll(5)
      scorecard.recordFrameScore(frameTen)
      scorecard.calculateTotal()
      expect(scorecard._total).toEqual(145)
    })
  })

  describe('#strikes game', () => {
    it('calculates 280 score after rolling 20 strikes', () => {
      frameOne.roll(10)
      frameOne.roll(0)
      scorecard.recordFrameScore(frameOne)
      frameTwo.roll(10)
      frameTwo.roll(0)
      scorecard.recordFrameScore(frameTwo)
      frameThree.roll(10)
      frameThree.roll(0)
      scorecard.recordFrameScore(frameThree)
      frameFour.roll(10)
      frameFour.roll(0)
      scorecard.recordFrameScore(frameFour)
      frameFive.roll(10)
      frameFive.roll(0)
      scorecard.recordFrameScore(frameFive)
      frameSix.roll(10)
      frameSix.roll(0)
      scorecard.recordFrameScore(frameSix)
      frameSeven.roll(10)
      frameSeven.roll(0)
      scorecard.recordFrameScore(frameSeven)
      frameEight.roll(10)
      frameEight.roll(0)
      scorecard.recordFrameScore(frameEight)
      frameNine.roll(10)
      frameNine.roll(0)
      scorecard.recordFrameScore(frameNine)
      frameTen.roll(10)
      frameTen.roll(0)
      scorecard.recordFrameScore(frameTen)
      scorecard.calculateTotal()
      expect(scorecard._total).toEqual(280)
    })
  })
})
