import React from 'react'
import './Field.css'

export default ({
    plantSeeds,
    seedTypes,
    field,
    harvest
}) =>
    <div data-is="field" className={field.seedType !== null ? field.seedType.name : ""}>
        
        {field.seedType !== null 
            ?   <button onClick={harvest}>Recolter</button> 
            :   <form onSubmit={plantSeeds}>
                    <select name='seeds'>
                        {seedTypes.map(type => <option key={type.name} value={type.name}>{type.name} : {type.buyPrice}</option>)}
                    </select>
                    <button>Plant</button>
                </form>
        }    
    </div>