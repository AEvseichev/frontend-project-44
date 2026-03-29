import crypto from 'crypto'
import startEngine from '../index.js'

const description = 'What is the result of the expression?'

const startRound = () => {
  const numberOne = crypto.randomInt(0, 101)
  const numberTwo = crypto.randomInt(0, 101)
  const operators = ['+', '-', '*']
  const operIndex = crypto.randomInt(0, operators.length)
  const randomOper = operators[operIndex]
  const question = `${numberOne} ${randomOper} ${numberTwo}`
  let trueAnswer = 0

  switch (randomOper) {
    case '+':
      trueAnswer = numberOne + numberTwo
      break
    case '-':
      trueAnswer = numberOne - numberTwo
      break
    case '*':
      trueAnswer = numberOne * numberTwo
      break
    default:
      console.log('Ошибка')
  }
  return [question, String(trueAnswer)]
}

export default () => startEngine(description, startRound)
