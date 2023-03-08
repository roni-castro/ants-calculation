export interface CalculateAntsWinLikeliHoodParams {
  numberOfAnts: number
  onFinishAllCalculations: () => void
  onStartAntCalculation: (index: number) => void
  onFinishAntCalculation: (values: {
    index: number
    winLikelihood: number
  }) => void
}
