import React from 'react'
import Field from '../Field/'
import './Farm.css'

// Farm :: Props -> React.Component
export default ({
    addField,
    fieldBuyPrice,
    fields,
    gold,
    maxFields,
}) =>
    <fieldset data-is="farm">
        <legend>The Farm</legend>
        <nav>
            <ol>
                <li>Money : {gold}</li>
                { (fields.length < maxFields && gold > fieldBuyPrice) && 
                    <li onClick={addField} className='action-available'>
                        Add field
                    </li>
                }
            </ol>
        </nav>
        { fields.map(field => <Field key={field.id} id={field.id}/>) }
        
    </fieldset>
