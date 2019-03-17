class Frame {
  constructor(rolls) {
    this.rolls = rolls
    this.MAX_SCORE = 10
  }

  scoreOfRoll() {
    return this.rolls.reduce((score, roll) => {
      return score + roll
    })
  }

  total(next_frame, frame_after_next) {
    return this.scoreOfRoll() + this.bonus(next_frame, frame_after_next)
  }

  bonus(next_frame, frame_after_next) {
    if (next_frame === undefined) {
      return 0
    }
    if (this.isStrike()) {
      return next_frame.strikeBonus(frame_after_next)
    }
    if (this.isSpare()) {

      return next_frame.spareBonus()
    }
    return 0
  }

  isSpare() {
    return this.scoreOfRoll() === this.MAX_SCORE
  }

  isStrike() {
    return this.firstRoll() === this.MAX_SCORE
  }
  
  spareBonus() {
    return this.firstRoll()
  }

  strikeBonus(next_frame) {
    if (this.isStrike() && next_frame !== undefined) {
      return this.scoreOfRoll() + next_frame.firstRoll()
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