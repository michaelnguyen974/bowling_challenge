
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
  total(next_frame, frame_after_next) {
    return this.scoreofRoll() + this.bonus(next_frame, frame_after_next)
  }

  bonus(next_frame, frame_after_next) {
    if (this.scoreofRoll() === 10) {
      return next_frame.spareBonus()
    }
    return 0
  }
  
  spareBonus() {
    return this.rolls[0]
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
