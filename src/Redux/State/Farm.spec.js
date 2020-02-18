import {
    INITIAL_STATE,
    default as reducer,
    addField,
    plantSeeds,
    harvest,
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
            ...INITIAL_STATE,
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
            ],
            gold : 100
        }

        const s2 = {
            fields : [
                {id:0, seedType: null},
                {id:1, seedType: {buyPrice : 4}}
            ],
            gold : 96
        }

        expect(
            reducer(s1, plantSeeds(1, {buyPrice : 4,}))
        ).toEqual(s2)
    })

    it('reduces harvest action', ()=>{
        const s1 = {
            fields: [
                {
                    id:0, 
                    seedType: {
                        sellPrice : 5
                    }
                }
            ],
            gold: 100
        }

        const s2 = {
            fields: [
                {
                    id:0, 
                    seedType: null
                }
            ],
            gold: 105
        }
        
        expect(
            reducer(s1, harvest(0))
        ).toEqual(s2)
    })
})
