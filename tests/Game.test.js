const { Game } = require('../src/Game.js');

describe('game', () => {

  beforeEach( () => {
    game = new Game();
  });

  describe("Game class", () => {
    
    test('calculates gutter game', () => {
      generateNewFrame([0, 0])
      expect(game.score()).toEqual(0);
    });

    test("calculates a standard game", () => {
      generateNewFrame([1,3]);
      expect(game.score()).toEqual(40);
    });

    test("calculates a game with spares", () => {
      generateNewFrame([5,5], [5,5,5]);
      expect(game.score()).toEqual(150);
    });

    test("calculates a perfect game with all strikes", () => {
      generateNewFrame([10], [10,10,10]);
      expect(game.score()).toEqual(300);
    });

  })


  function generateNewFrame(frame, final_frame) {
    for(i = 0; i < 9; i++) {
      game.roll(frame);
    }
    game.roll(final_frame || frame);
  }

});
