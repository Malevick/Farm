/**
 * Seed Object
 * @typedef {Object} Seed
 * @property {string} name
 * @property {Number} cropTime
 * @property {Number} sellPrice
 * @property {Number} buyPrice
 * @property {Number} waterRequirements
 */
export const SEED_TYPES = [
    {
        name : "wheat",
        cropTime : 1,
        sellPrice : 3,
        buyPrice : 1,
        waterRequirements : 3
    },
    {
        name : "corn",
        cropTime : 2,
        sellPrice : 11,
        buyPrice : 3,
        waterRequirements : 9
    },
    {
        name : "barley",
        cropTime : 3,
        sellPrice : 20,
        buyPrice : 5,
        waterRequirements : 15
    },
]

/**
 * Marketplace initial state
 * @typedef {Object} Marketplace
 * @property {[Seed]} seedTypes
 */
export const INITIAL_STATE = {
    seedTypes : [
        {
            name : "wheat",
            cropTime : 1,
            sellPrice : 3,
            buyPrice : 1,
            waterRequirements : 3
        },
        {
            name : "corn",
            cropTime : 2,
            sellPrice : 11,
            buyPrice : 3,
            waterRequirements : 9
        },
        {
            name : "barley",
            cropTime : 3,
            sellPrice : 20,
            buyPrice : 5,
            waterRequirements : 15
        },
    ]
}

/**
 * @param {Marketplace} state
 */
export default (state = INITIAL_STATE, action = {}) => {
    console.warn(state)
    console.warn(action)
    return state;
}
