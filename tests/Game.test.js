const { Game } = require('../src/Game.js');
const { Frame } = require('../src/Game.js')

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

  })

  describe("Frame", () => {

    test("calculates a total for two rolls", () => {
      var frame = new Frame([1,3]);
      var next = new Frame([0,0]);
      expect(frame.total(next)).toEqual(4);
    });

    test("calculates a total for one spare", function(){
      var frame = new Frame([5,5]);
      var next = new Frame([5,2]);
      expect(frame.total(next)).toEqual(15);
    });
  })

  function generateNewFrame(frame, final_frame) {
    for(i = 0; i < 9; i++) {
      game.roll(frame);
    }
    game.roll(final_frame || frame);
  }

});
