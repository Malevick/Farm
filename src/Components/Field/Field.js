import React from 'react'
import './Field.css'

export default ({
    plantSeeds,
    seedTypes,
    plantedSeeds
}) =>
    <div data-is="field" className={plantedSeeds !== null ? plantedSeeds : ""}>
        <form onSubmit={plantSeeds}>
            <select name='seeds'>
                {seedTypes.map(type => <option key={type.name} value={type.name}>{type.name}</option>)}
            </select>
            <button>Plant</button>
        </form>        
    </div>