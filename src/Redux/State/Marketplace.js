export const SEED_TYPES = [
    {
        name : "wheat",
        cropTime : 1,
        sellPrice : 3,
        buyPrice : 1,
        waterRequirements : 3,
        color: '#F5DEB3'
    },
    {
        name : "corn",
        cropTime : 2,
        sellPrice : 11,
        buyPrice : 3,
        waterRequirements : 9,
        color: '#FBEC5D'
    },
    {
        name : "barley",
        cropTime : 3,
        sellPrice : 20,
        buyPrice : 5,
        waterRequirements : 15,
        color: '#db8626'
    },
]

// initial state
export const INITIAL_STATE = {
    seedTypes : SEED_TYPES
}


export default (state = INITIAL_STATE, action = {}) => {
    console.warn(state)
    console.warn(action)
    return state;
}
