import {Ant, AntsResponse} from '@apiTypes/ants'

export enum AllAntsCalculationStatus {
  'NotYetRun' = 'Not yet run',
  'InProgress' = 'In progress',
  'AllCalculated' = 'All Calculated'
}

export enum AntCalculationStatus {
  'NotYetRun' = 'Not yet run',
  'InProgress' = 'In progress',
  'Calculated' = 'Calculated'
}

export interface AntsCalculationData extends Ant {
  status: AntCalculationStatus
  winLikelihood: number
}
