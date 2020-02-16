import {
    INITIAL_STATE,
    default as reducer,
    addField,
    plantSeeds,
} from './Farm'

describe('Redux :: State :: Farm', () => {
    it('reduces to initial state by default', () => {
        expect(
            reducer()
        ).toEqual(
            INITIAL_STATE
        )
    })

    it('reduces addField action', () => {
        expect(
            reducer(INITIAL_STATE, addField())
        ).toEqual({
            fields: [
                {id: 0, seedType: null }
            ]
        })
    })
})
