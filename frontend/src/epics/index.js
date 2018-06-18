import { getProposedProjectsEpic } from './project'
import { getNetworkStatusEpic } from './network'
import userEpics from './user'

import { combineEpics } from 'redux-observable'

export default combineEpics(getNetworkStatusEpic, userEpics, getProposedProjectsEpic)
