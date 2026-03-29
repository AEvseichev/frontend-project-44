import crypto from 'crypto'
import startEngine from '../index.js'

const description = 'What is the result of the expression?'

const startRound = () => {
  const numberOne = crypto(0, 101)
  const numberTwo = crypto(0, 101)
  const operators = ['+', '-', '*', '/']
  const randomOper = operators[Math.floor(Math.random() * operators.length)]
  const question = String(numberOne + ' ' + randomOper + ' ' + numberTwo)
  let trueAnswer = 0

  switch (randomOper) {
    case '+':
      trueAnswer = numberOne + numberTwo
      break
    case '-':
      trueAnswer = numberOne - numberOne
      break
    case '*':
      trueAnswer = numberOne * numberTwo
      break
    case '/':
      trueAnswer = numberOne / numberTwo
      break
    default:
      console.log('Ошибка')
  }
  return [question, String(trueAnswer)]
}

export default () => startEngine(description, startRound)
