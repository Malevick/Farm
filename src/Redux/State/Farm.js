// initial state
export const INITIAL_STATE = {
    fields: [],
}
export const SEEDS_TYPES = [
    {
        name : "wheat",
        cropTime : 1,
        sellPrice : 5
    },
    {
        name : "corn",
        cropTime : 2,
        sellPrice : 12
    },
]

export const FIELD_INITIAL_STATE = {
    id: null,
    seedType: null,
}

// actions types
export const ADD_FIELD = '@farm-mariondz/Farm/ADD_FIELD';
export const PLANT_SEEDS = '@farm-mariondz/Farm/PLANT_SEEDS';

// actions creators
export const addField = () => ({ type: ADD_FIELD })

// @type SeedType {
//    cropTime :: Number,
//    sellPrice :: Number
// }
//
// plantSeeds :: (Number, SeedType) -> Action
export const plantSeeds = (fieldId, seedType) => ({
    type: PLANT_SEEDS,
    seedType,
    fieldId,
})

// Farm :: (State, Action *) -> State
export default (state = INITIAL_STATE, action = {}) => {
    console.warn(state)
    console.warn(action)

    if (action.type === ADD_FIELD) {
        return ({
            ...state,
            fields: [...state.fields, {
                id : state.fields.length
            }],
        })
    }

    if(action.type === PLANT_SEEDS){
        return ({
            ...state,
            fields : state.fields.map((field)=>{
                if(field.id === action.fieldId){
                    return {
                        ...field, 
                        seedType : action.seedType
                    }
                }

                return field;
            })
        })
    }

    return state
}
