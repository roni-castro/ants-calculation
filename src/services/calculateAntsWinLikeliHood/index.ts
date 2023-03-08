import {generateAntWinLikelihoodCalculator} from '../antLikeliHoodCalculator'
import {CalculateAntsWinLikeliHoodParams} from './types'

export const calculateAntsWinLikeliHood = ({
  numberOfAnts,
  onFinishAllCalculations: onEndAllCalculations,
  onStartAntCalculation,
  onFinishAntCalculation: onEndAntCalculation
}: CalculateAntsWinLikeliHoodParams) => {
  const promises = [...new Array(numberOfAnts)].map((_, index) =>
    new Promise((resolve) => {
      onStartAntCalculation(index)
      generateAntWinLikelihoodCalculator()((winLikelihood: number) => {
        return resolve({index, winLikelihood})
      })
    }).then(onEndAntCalculation)
  )
  Promise.all(promises).then(() => {
    onEndAllCalculations()
  })
}
