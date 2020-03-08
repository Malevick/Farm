/**
 * @typedef {import('./Marketplace').Seed} Seed
 */

/**
 * Field Object
 * @typedef {Object} Field
 * @property {Number} id
 * @property {Seed} seedType
 * @property {Number} wateringLevel
 */

/**
 * Initial state of Farm
 * @typedef {Object} Farm
 * @property {Number} fieldBuyPrice
 * @property {[Field]} fields
 * @property {Number} gold
 * @property {Number} maxFields
 */
export const INITIAL_STATE = {
    fieldBuyPrice: 50,
    fields: [
        {
            id : 1,
            seedType: null,
            wateringLevel: 0,
            isGrowing: false,
        }
    ],
    gold: 30,
    maxFields : 5,
}

// actions types
export const ADD_FIELD =    '@farm-mariondz/Farm/ADD_FIELD';
export const PLANT_SEEDS =  '@farm-mariondz/Farm/PLANT_SEEDS';
export const HARVEST =      '@farm-mariondz/Farm/HARVEST';
export const WATER =        '@farm-mariondz/Farm/WATER';
export const HAS_GROWN =    '@farm-mariondz/Farm/HAS_GROWN';

// actions creators
/**
 * addField :: -> Action
 * @returns {{type : ADD_FIELD}}
 * @callback addField
 */
export const addField = () => ({ type: ADD_FIELD })

/**
 * plantSeeds :: (Number, SeedType) -> Action
 * @param {Number} fieldId
 * @param {Seed} seedType
 * @returns {{
    * type : PLANT_SEEDS,
    * seedType : Seed,
    * field : Number
 * }}
 * @callback plantSeeds
 */
export const plantSeeds = (fieldId, seedType) => ({
    type: PLANT_SEEDS,
    seedType,
    fieldId,
})

/**
 * harvest :: Number -> Action
 * @param {Number} fieldId
 * @returns {{
    * type : HARVEST,
    * field : Number
 * }}
 *  @callback harvest
 */
export const harvest = fieldId => ({
    type : HARVEST,
    fieldId,
})

/**
 * water :: Number -> Action
 * @param {Number} fieldId
 * @returns {{
    * type : WATER,
    * fieldId : Number
 * }}
 *  @callback water
 */
export const water = fieldId => ({
    type : WATER,
    fieldId,
})

export const hasGrown = fieldId => ({
    type: HAS_GROWN,
    fieldId,
})

/**
 * Farm :: (State, Action *) -> State
 * @param {Farm} state
 * @param {addField|harvest|plantSeeds|water} action
 */
export default (state = INITIAL_STATE, action = {}) => {
    // console.warn(state)
    console.warn(action)

    if (action.type === ADD_FIELD) {
        return ({
            ...state,
            gold : state.gold - state.fieldBuyPrice,
            fields: [
                ...state.fields,
                // @TODO c'est de la merde
                {
                    id : state.fields.length + 1,
                    seedType: null,
                    wateringLevel: 0,
                    isGrowing: false,
                }
            ],
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
                    wateringLevel: 0,
                }
                : field
            )
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

    if(action.type === WATER){
        return ({
            ...state,
            fields : state.fields.map(field => field.id === action.fieldId
                ? {
                    ...field,
                    wateringLevel: field.wateringLevel + 1,
                    isGrowing: true,
                }
                : field
            )
        })
    }

    if(action.type === HAS_GROWN){
        return ({
            ...state,
            fields : state.fields.map(field => field.id === action.fieldId
                ? {
                    ...field,
                    isGrowing: false,
                }
                : field
            )
        })
    }

    return state
}
