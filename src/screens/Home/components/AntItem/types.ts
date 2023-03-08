import {Ant} from '@apiTypes/ants'
import {AntCalculationStatus} from '@redux/antsCalculation/types'

export interface AntItemProps extends Ant {
  status: AntCalculationStatus
  winLikelihood: number
}
