import {Ant} from '@apiTypes/ants'

type AntStatus = 'Not ready' | 'In progress' | 'All calculated'

export interface AntItemProps extends Ant {
  status: AntStatus
}
