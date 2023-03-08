export interface CalculateAntsWinLikeliHoodParams {
  numberOfAnts: number
  onAntCalculation: (values: {index: number; winLikelihood: number}) => void
  onEndAllCalculations: () => void
}
