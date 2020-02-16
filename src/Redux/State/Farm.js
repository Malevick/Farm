// initial state
export const INITIAL_STATE = {
    fields: 1,
}

// actions types
export const ADD_FIELD = '@farm-mariondz/Farm/ADD_FIELD'

// actions creators
export const addField = () => ({ type: ADD_FIELD })

// Farm :: (State, Action *) -> State
export default (state = INITIAL_STATE, action = {}) => {
    console.warn(state)
    console.warn(action)

    if (action.type === ADD_FIELD) {
        return ({
            ...state,
            fields: state.fields + 1,
        })
    }

    return state
}
