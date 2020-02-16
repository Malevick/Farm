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

    it('reduces plantSeeds action', ()=>{

        const s1 = {
            fields : [
                {id:0, seedType: null},
                {id:1, seedType: null}
            ]
        }

        const s2 = {
            fields : [
                {id:0, seedType: null},
                {id:1, seedType: 'the wonderfull seed type'}
            ]
        }

        expect(
            reducer(s1, plantSeeds(1, 'the wonderfull seed type'))
        ).toEqual(s2)
    })
})
