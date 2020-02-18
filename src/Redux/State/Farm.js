// initial state
export const INITIAL_STATE = {
    fields: [],
    gold: 100
}

// actions types
export const ADD_FIELD = '@farm-mariondz/Farm/ADD_FIELD';
export const PLANT_SEEDS = '@farm-mariondz/Farm/PLANT_SEEDS';
export const HARVEST = '@farm-mariondz/Farm/HARVEST'

// actions creators
export const addField = () => ({ type: ADD_FIELD })

// @type SeedType {
//    name :: String,
//    cropTime :: Number,
//    sellPrice :: Number,
//    buyPrice :: Number
// }
//
// plantSeeds :: (Number, SeedType) -> Action
export const plantSeeds = (fieldId, seedType) => ({
    type: PLANT_SEEDS,
    seedType,
    fieldId,
})

// harvest :: Number -> Action
export const harvest = fieldId => ({
    type : HARVEST,
    fieldId,
})

// Farm :: (State, Action *) -> State
export default (state = INITIAL_STATE, action = {}) => {
    console.warn(state)
    console.warn(action)

    if (action.type === ADD_FIELD) {
        return ({
            ...state,
            fields: [
                ...state.fields,
                {
                    id : state.fields.length,
                    seedType: null,
                }
            ],
        })
    }

    if (action.type === PLANT_SEEDS){
        return ({
            ...state,
            gold : state.gold - action.seedType.buyPrice,
            fields : state.fields.map(field => field.id === action.fieldId
                ? {
                    ...field,
                    seedType : action.seedType,
                }
                : field
            )
        })
    }

    if(action.type === HARVEST){
        const field = state.fields.find(field => field.id === action.fieldId)
        return ({
            ...state,
            gold : state.gold + field.seedType.sellPrice,
            fields : state.fields.map(field => field.id === action.fieldId
                ? {
                    ...field,
                    seedType : null,
                }
                : field
            )
        })
    }

    return state
}
