import startEngine from '../index.js'
import getProgression from '../utils.js'
import crypto from 'crypto'

const description = 'What number is missing in the progression?'

const startRound = () => {
  let progression = getProgression()
  const hiddenNumber = crypto.randomInt(0, progression.length)
  const trueAnswer = progression[hiddenNumber]
  progression[hiddenNumber] = '..'
  const question = progression.join(' ')

  return [question, trueAnswer]
}

export default () => startEngine(description, startRound)
