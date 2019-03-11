class Scorecard {
  constructor() {
    this.frames = []
  }

  roll(roll1, roll2) {
    return roll1 + roll2
  }

  score() {
    return this.frames.reduce(function(score, frame, frameindex, frames) {
      return score + frame.total(frames[frameindex +1], frames[frameindex + 2])
    }, 0)
  }
    
};

module.exports = { 
  Scorecard 
}
