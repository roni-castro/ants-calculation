import {generateAntWinLikelihoodCalculator} from '../antLikeliHoodCalculator'
import {CalculateAntsWinLikeliHoodParams} from './types'

export const calculateAntsWinLikeliHood = ({
  numberOfAnts,
  onEndAllCalculations,
  onAntCalculation
}: CalculateAntsWinLikeliHoodParams) => {
  const promises = [...new Array(numberOfAnts)].map((_, index) =>
    new Promise((resolve) => {
      generateAntWinLikelihoodCalculator()((winLikelihood: number) => {
        return resolve({index, winLikelihood})
      })
    }).then(onAntCalculation)
  )
  Promise.all(promises).then(() => {
    onEndAllCalculations()
  })
}
