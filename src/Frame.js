class Frame {
  constructor(rolls) {
    this.rolls = rolls
    this.MAX_SCORE = 10
  }

  scoreofRoll() {
    return this.rolls.reduce(function(score, roll) {
      return score + roll
    })
  }

  total(next_frame, frame_after_next) {
    return this.scoreofRoll() + this.bonus(next_frame, frame_after_next)
  }

  bonus(next_frame, frame_after_next) {
    if (undefined === next_frame) {
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

  is_Spare() {
    return this.scoreofRoll() === this.MAX_SCORE
  }

  is_Strike() {
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