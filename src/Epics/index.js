import { combineEpics } from 'redux-observable'
import Farm from './Farm'

export default combineEpics(
    Farm,
)
