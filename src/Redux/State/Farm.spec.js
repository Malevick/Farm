import {
    INITIAL_STATE,
    default as reducer,
    addField,
    harvest,
    plantSeeds,
    water,
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

        const s1 = {
            fieldBuyPrice : 50,
            fields: [
                {
                    id : 1,
                    seedType: null,
                    wateringLevel: 0,
                }
            ],
            gold: 50,
        };

        const s2 = {
            fieldBuyPrice : 50,
            fields: [
                {
                    id : 1,
                    seedType: null,
                    wateringLevel: 0,
                },
                {
                    id : 2,
                    seedType: null,
                    wateringLevel: 0,
                }
            ],
            gold: 0,
        }

        expect(
            reducer(s1, addField())
        ).toEqual(s2)

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
                    },
                    wateringLevel: 0,
                }
            ],
            gold: 100
        }

        const s2 = {
            fields: [
                {
                    id:0, 
                    seedType: null,
                    wateringLevel: 0,
                }
            ],
            gold: 105
        }
        
        expect(
            reducer(s1, harvest(0))
        ).toEqual(s2)

    })

    it('reduces water action', ()=>{

        const s1 = {
            fields: [
                {
                    id: 1,
                    wateringLevel : 0
                }
            ]
        }

        const s2 = {
            fields: [
                {
                    id: 1,
                    wateringLevel : 1
                }
            ]
        }
        
        expect(
            reducer(s1, water(1))
        ).toEqual(s2)

    })

})
