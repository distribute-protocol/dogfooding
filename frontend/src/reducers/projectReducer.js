import { PROJECT_PROPOSED, PROJECTS_RECEIVED, TASK_LIST_SET, HASHED_TASK_LIST_SUBMITTED, PROJECT_STAKED, VERIFIED_TASK_LISTS_RECEIVED } from '../constants/ProjectActionTypes'
import { FINAL_TASK_LIST_SUBMITTED, TASKS_RECEIVED, VALIDATIONS_RECEIVED } from '../constants/TaskActionTypes'

const initialState = {
}

// let receiptHandler = (tx, multiHash) => {
//   let txReceipt = tx.receipt
//   let projectAddress = txReceipt.logs[0].address
//   this.props.proposeProject(Object.assign({}, this.state.tempProject, {address: projectAddress, ipfsHash: `https://ipfs.io/ipfs/${multiHash}`}))  // this is calling the reducer
//   this.setState({cost: 0, photo: false, imageUrl: false, coords: 0, location: ''})
// }
export default function projectReducer (state = initialState, action) {
  switch (action.type) {
    case PROJECTS_RECEIVED:
      if (!action.projects.length) {
        return state
      } else {
        let object = action.projects.reduce((obj, item) => (obj[item.address] = item, obj), {})
        // console.log(object)
        return Object.assign({}, state, {[action.state]: object})
      }
    case PROJECT_PROPOSED:
      return state
    case TASK_LIST_SET:
      let project = Object.assign({}, state[2][action.projectAddress], {taskList: action.taskDetails})
      let projects = Object.assign({}, state[2], {[action.projectAddress]: project})
      return Object.assign({}, state, {2: projects})
    case HASHED_TASK_LIST_SUBMITTED:
      let oldSubmissions
      if (typeof state[2][action.projectAddress].submittedTasks === 'undefined') {
        oldSubmissions = []
      } else {
        oldSubmissions = state[2][action.projectAddress].submittedTasks
      }
      let newSubmissions = oldSubmissions
      let overwrite = oldSubmissions.findIndex(function (element) { return element.submitter === action.submitterAddress })
      if (overwrite === -1) {
        let length = newSubmissions.length
        newSubmissions = Object.assign([], newSubmissions, {[length]: {content: action.tasks, submitter: action.submitterAddress, weighting: action.receipt.weighting.toNumber()}})
      } else {
        newSubmissions = Object.assign([], newSubmissions, {[overwrite]: {content: action.tasks, submitter: action.submitterAddress, weighting: action.receipt.weighting.toNumber()}})
      }
      project = Object.assign({}, state[2][action.projectAddress], {submittedTasks: newSubmissions})
      projects = Object.assign({}, state[2], {[action.projectAddress]: project})
      return Object.assign({}, state, {2: projects})
    case PROJECT_STAKED:
      // console.log(action)
      // let repStaked = parseInt(action.value)
      // let repBal = parseInt(state[1][action.projectAddress].reputationBalance)
      // let totalRepStaked = parseInt(action.value) + parseInt(state[1][action.projectAddress].reputationBalance)
      // let updateRepBal = Object.assign({}, state[1][action.projectAddress], {reputation: totalRepStaked})
      // return Object.assign({}, state, {1: {[action.projectAddress]: updateRepBal}})
      return state
    case VERIFIED_TASK_LISTS_RECEIVED:
      project = Object.assign({}, state[2][action.address], {submittedTasks: action.result})
      projects = Object.assign({}, state[2], {[action.address]: project})
      return Object.assign({}, state, {2: projects})
    case FINAL_TASK_LIST_SUBMITTED:
      project = Object.assign({}, state[3][action.address], {taskList: action.tasks})
      projects = Object.assign({}, state[3], {[action.address]: project})
      return Object.assign({}, state, {3: projects})
    case TASKS_RECEIVED:
      let currentState = action.state
      project = Object.assign({}, state[currentState][action.projectAddress], {tasks: action.taskDetails})
      projects = Object.assign({}, state[currentState], {[action.projectAddress]: project})
      return Object.assign({}, state, {[currentState]: projects})
    case VALIDATIONS_RECEIVED:
      // let task = Object.assign({}, [action.projectAddress], [action.index], {validations: action.txObj})
      // return Object.assign({}, action.projectAddress, action.index, {[task]: validations})
      return state
    default:
  }
  return state
}
