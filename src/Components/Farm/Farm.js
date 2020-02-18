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
        <p>money : {gold}</p>
        { fields.map(field => <Field key={field.id} id={field.id}/>) }
        { fields.length < 6 && 
            <button onClick={addField}>
                Add field
            </button>
        }
    </fieldset>
