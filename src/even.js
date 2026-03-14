import readLineSync from 'readline-sync'

function isEven() {
  console.log('Welcome to the Brain Games!')
  const userName = readLineSync.question('May I have your name?')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no"')

  let countTrueAnswer = 0

  while (countTrueAnswer < 3) {
    const randomNumber = Math.floor(Math.random() * 101)
    console.log(`Question: ${randomNumber}`)
    const yourAnswer = readLineSync.question('Your answer: ')

    if (randomNumber % 2 === 0 && yourAnswer === 'yes') {
      console.log('Correct!')
      countTrueAnswer += 1
    }
    else if (randomNumber % 2 !== 0 && yourAnswer === 'no') {
      console.log('Correct!')
      countTrueAnswer += 1
    }
    else {
      console.log(`'yes' is wrong answer ;(.
        Correct answer was 'no'.
        Let's try again, ${userName}!`)
      countTrueAnswer = 0
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default isEven
