const { Game } = require('../src/Game.js');

describe('game', () => {

  beforeEach( () => {
    game = new Game();
  });

  describe("Game class", () => {
    
    test('calculates gutter game', () => {
      generateFrames([0, 0])
      expect(game.score()).toEqual(0);
    });

    test("calculates a standard game", () => {
      generateFrames([1,3]);
      expect(game.score()).toEqual(40);
    });

    test("calculates a game with spares", () => {
      generateFrames([5,5], [5,5,5]);
      expect(game.score()).toEqual(150);
    });

    test("calculates a perfect game with all strikes", () => {
      generateFrames([10], [10,10,10]);
      expect(game.score()).toEqual(300);
    });

    test("calculate a game with strikes normal scoring in the final frame", () => {
      generateFrames([10], [10,10,2]);
      expect(game.score()).toEqual(292)
    })

    test("calculate a game with strikes and spares in last frame", () => {
      generateFrames([10], [10,5,5]);
      expect(game.score()).toEqual(285)
    })

  })


  function generateFrames(frame, final_frame) {
    for(i = 0; i < 9; i++) {
      game.roll(frame);
    }
    game.roll(final_frame || frame);
  }

});
