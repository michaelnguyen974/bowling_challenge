const { Scorecard } = require('../src/Scorecard.js');

describe('Scorecard', () => {

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  test('scorecard returns the roll from user input', () => {
    expect(scorecard.roll(4,0)).toEqual(4);
  });

});
