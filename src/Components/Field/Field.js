import React from 'react'
import './Field.css'

const showField = (
    field, 
    harvest, 
    seedTypes, 
    plantSeeds,
    watering
)=>{ 
    if(field.seedType !== null ){

        if(field.currentWateringLevel < field.seedType.waterRequirements){
            return (
                <div>
                    <span>{field.seedType.name}</span>
                    <div className='tank'>
                        <div className='water' style={{width: (field.currentWateringLevel * 100 / field.seedType.waterRequirements) + '%'}}></div>
                    </div>
                    <button onClick={watering} className='actionAvailable'>
                        Watering
                    </button>
                </div>
                
            )
        }

        else{
            return (
                <div>
                    <span>{field.seedType.name}</span>
                    <button onClick={harvest} className='actionAvailable' >
                        Harvest
                    </button> 
                </div>
            )
        }
    }

    else{
        return (
            <form onSubmit={plantSeeds}>
                <select name='seeds'>
                    {seedTypes.map(
                        type => 
                            <option key={type.name} value={type.name}>
                                {type.name} ({type.buyPrice})
                            </option>
                        )}
                </select>
                <button className='actionAvailable'>Plant</button>
            </form>
        )
    }
}

export default ({
    plantSeeds,
    seedTypes,
    field,
    harvest,
    watering
}) =>
    <div data-is="field">
        <div className={field.seedType !== null ? field.seedType.name + ' fieldColor': undefined} 
            style={{
                backgroundColor: field.seedType !== null ? field.seedType.color : 'transparent', 
                opacity: field.seedType !== null ? (field.currentWateringLevel / field.seedType.waterRequirements) : 0
            }}>
        </div>
        <div className='fieldMenu'>
            {showField(field, harvest, seedTypes, plantSeeds, watering)}
        </div>
    </div>
