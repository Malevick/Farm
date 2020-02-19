import React from 'react'
import './Field.css'

/**
 * @typedef {import('../../Redux/State/Farm').Field} Field
 * @typedef {import('./../../Redux/State/Farm').harvest} harvest
 * @typedef {import('./../../Redux/State/Farm').water} water
 * @typedef {import('../../Redux/State/Marketplace').Seed} Seed
 * @typedef {import('./../../Redux/State/Farm').plantSeeds} plantSeeds
 */

/**
 * waterOrHarvest :: (Field, Action, Action) -> Element
 * @param {Field} field
 * @param {harvest} harvest
 * @param {water} water
 * @returns {JSX.Element}
 */
const waterOrHarvest = (field, harvest, water) => (
    <div>
        <span>{field.seedType.name}</span>
        {field.wateringLevel < field.seedType.waterRequirements 
            ?
                <div>
                    <div className='tank'>
                        <div className='water' style={{width: (field.wateringLevel * 100 / field.seedType.waterRequirements) + '%'}}></div>
                    </div>
                    <button onClick={water} className='action-available'>
                        Water
                    </button>
                </div>
            :
                <button onClick={harvest} className='action-available' >
                    Harvest
                </button> 
        }
    </div>
)

/**
 * @param {{
    * plantSeeds : plantSeeds,
    * seedTypes : [Seed],
    * field : Field,
    * harvest : harvest,
    * water : water,
 * }}
 * @returns {JSX.Element}
 */
export default ({
    plantSeeds,
    seedTypes,
    field,
    harvest,
    water
}) =>
    <div data-is="field">
        <div className={field.seedType !== null ? field.seedType.name + ' field-content':  'field-content'} 
            style={{
                opacity: field.seedType !== null ? (field.wateringLevel / field.seedType.waterRequirements) : 0
            }}>
        </div>
        <div className='field-menu'>
            {field.seedType === null 
                ?
                <form onSubmit={plantSeeds}>
                    <select name='seeds'>
                        {seedTypes.map(
                            type => 
                                <option key={type.name} value={type.name}>
                                    {type.name} ({type.buyPrice})
                                </option>
                            )}
                    </select>
                    <button className='action-available'>Plant</button>
                </form>
                :
                waterOrHarvest(field, harvest, water)
            }
        </div>
    </div>
