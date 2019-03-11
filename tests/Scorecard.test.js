const { Scorecard } = require('../src/Scorecard.js');

describe('Scorecard', () => {

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  describe("Gutter Game", () => {
    test('calculates gutter game', () => {
      generateNewFrame([0, 0])
      expect(scorecard.score()).toEqual(0);
    });

  })

  function generateNewFrame(frame, final_frame) {
    for(i = 0; i < 9; i++) {
      scorecard.roll(frame);
    }
    scorecard.roll(final_frame || frame);
  }

});
