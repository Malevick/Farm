export const SEEDS_TYPES = [
    {
        name : "wheat",
        cropTime : 1,
        sellPrice : 5,
        buyPrice : 2,
    },
    {
        name : "corn",
        cropTime : 2,
        sellPrice : 12,
        buyPrice : 4,
    },
]

// initial state
export const INITIAL_STATE = {
    seedTypes : SEEDS_TYPES
}


export default (state = INITIAL_STATE, action = {}) => {
    console.warn(state)
    console.warn(action)
    return state;
}
