import crypto from 'crypto'

const getProgression = () => {
  const start = crypto.randomInt(0, 50)
  const step = crypto.randomInt(1, 11)
  const length = crypto.randomInt(5, 11)

  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

export default getProgression
