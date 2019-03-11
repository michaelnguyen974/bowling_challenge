const Frame = require("./Frame.js").Frame
class Game {
  constructor() {
    this.frames = []
  }

  roll(rolls) {
    var frame = new Frame(rolls)
    this.frames.push(frame)
  }

  score() {
    return this.frames.reduce(function(score, frame, frameindex, framesArray) {
      return score + frame.total(framesArray[frameindex +1], framesArray[frameindex + 2])
    }, 0)
  }
    
};


module.exports = { 
  Game
}
