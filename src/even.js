import crypto from 'crypto'
import startEngine from './index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no"'

const startRound = () => {
  const randomNumber = crypto.randomInt(0, 101)
  const question = String(randomNumber)
  const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

  return [question, trueAnswer]
}

export default () => startEngine(description, startRound)
