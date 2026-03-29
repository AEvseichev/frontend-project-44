import crypto from 'crypto'
import startEngine from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const startRound = () => {
  let numberOne = crypto.randomInt(0, 101)
  let numberTwo = crypto.randomInt(0, 101)
  const question = `${numberOne} ${numberTwo}`

  let trueAnswer = String(numberOne + numberTwo)

  while (numberOne !== 0 && numberTwo !== 0) {
    if (numberOne > numberTwo) {
      numberOne %= numberTwo
    }
    else {
      numberTwo %= numberOne
    }
  }
  return [question, trueAnswer]
}

export default () => startEngine(description, startRound)
