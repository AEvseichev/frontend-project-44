import startEngine from '../index.js'
import { isPrime } from '../utils.js'
import crypto from 'crypto'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"'

const startRound = () => {
  const randomNumber = crypto.randomInt(0, 101)
  const question = String(randomNumber)
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no'

  return [question, trueAnswer]
}

export default () => startEngine(description, startRound)
