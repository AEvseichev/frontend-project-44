import readLineSync from 'readline-sync'

const startEngine = (description, startRound) => {
  console.log('Welcome to the Brain Games!')
  const userName = readLineSync.question('May I have your name?')
  console.log(`Hello, ${userName}!`)

  console.log(description)

  const countTrueAnswer = 3

  for (let i = 0; i < countTrueAnswer; i += 1) {
    const [question, trueAnswer] = startRound()
    console.log(`Question: ${question}`)
    const userAnswer = readLineSync.question('Your answer: ')

    if (userAnswer === trueAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default startEngine
