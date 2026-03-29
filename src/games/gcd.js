import crypto from 'crypto'
import startEngine from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const startRound = () => {
  let numberOne = crypto.randomInt(1, 101)
  let numberTwo = crypto.randomInt(1, 101)
  const question = `${numberOne} ${numberTwo}`

  while (numberOne !== 0 && numberTwo !== 0) {
    if (numberOne > numberTwo) {
      numberOne %= numberTwo
    }
    else {
      numberTwo %= numberOne
    }
  }
  const trueAnswer = String(numberOne + numberTwo)

  return [question, trueAnswer]
}

export default () => startEngine(description, startRound)
