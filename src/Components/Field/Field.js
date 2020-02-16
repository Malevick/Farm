import React from 'react'
import './Field.css'

export default ({
    plantSeeds,
    seedTypes
}) =>
    <div data-is="field">
        <form onSubmit={plantSeeds}>
            <select name='seeds'>
                {seedTypes.map(type => <option key={type.name} value={type.name}>{type.name}</option>)}
            </select>
            <button>Plant</button>
        </form>        
    </div>