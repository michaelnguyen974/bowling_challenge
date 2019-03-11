
class Game {
  constructor() {
    this.frames = []
  }

  roll(rolls) {
    var frame = new Frame(rolls)
    this.frames.push(frame)
  }

  score() {
    return this.frames.reduce(function(score, frame, frameindex, frames) {
      return score + frame.total(frames[frameindex +1], frames[frameindex + 2])
    }, 0)
  }
    
};

class Frame {
  constructor(rolls) {
    this.rolls = rolls
  }
 

  scoreofRoll() {
    return this.rolls.reduce(function(score, roll) {
      return score + roll
    })
  }
}


module.exports = { 
  Game, 
  Frame 
}
