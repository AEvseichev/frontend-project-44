import readLineSync from 'readline-sync'
import crypto from 'crypto'

function isEven() {
  console.log('Welcome to the Brain Games!')
  const userName = readLineSync.question('May I have your name?')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no"')

  let countTrueAnswer = 0

  while (countTrueAnswer < 3) {
    const randomNumber = crypto.randomInt(0, 100)
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readLineSync.question('Your answer: ')

    const isEven = randomNumber % 2 === 0
    const correctAnswer = isEven ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      countTrueAnswer += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      countTrueAnswer = 0
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default isEven
