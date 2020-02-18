import React from 'react'
import Field from '../Field/'
import './Farm.css'

// Farm :: Props -> React.Component
export default ({
    addField,
    fields,
    gold
}) =>
    <fieldset data-is="farm">
        <legend>The Farm</legend>
        <nav>
            <ol>
                <li>Money : {gold}</li>
                { (fields.length < 6 && gold > 50) && 
                    <li onClick={addField} className='actionAvailable'>
                        Add field
                    </li>
                }
            </ol>
        </nav>
        { fields.map(field => <Field key={field.id} id={field.id}/>) }
        
    </fieldset>
