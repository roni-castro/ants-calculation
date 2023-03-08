export function generateAntWinLikelihoodCalculator() {
  const delay = 1000 + Math.random() * 7000// TODO CHANGE
  const likelihoodOfAntWinning = Math.random()

  return (callback) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning)
    }, delay)
  }
}
