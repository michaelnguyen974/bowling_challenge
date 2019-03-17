class Frame {
  constructor(rolls) {
    this.rolls = rolls
    this.MAX_SCORE = 10
  }

  scoreOfRoll() {
    return this.rolls.reduce(function(score, roll) {
      return score + roll
    })
  }

  total(next_frame, frame_after_next) {
    return this.scoreofRoll() + this.bonus(next_frame, frame_after_next)
  }

  bonus(next_frame, frame_after_next) {
    if (next_frame === undefined) {
      return 0
    }
    if (this.is_Strike()) {
      return next_frame.strikeBonus(frame_after_next)
    }
    if (this.is_Spare()) {

      return next_frame.spareBonus()
    }
    return 0
  }

  isSpare() {
    return this.scoreofRoll() === this.MAX_SCORE
  }

  isStrike() {
    return this.firstRoll() === this.MAX_SCORE
  }
  
  spareBonus() {
    return this.firstRoll()
  }

  strikeBonus(next_frame) {
    if (this.is_Strike() && next_frame !== undefined) {
      return this.scoreofRoll() + next_frame.firstRoll()
    }
    return this.firstRoll() + this.rolls[1]
  }
  
  firstRoll() {
    return this.rolls[0]
  }
}

module.exports = { 
  Frame: Frame
}