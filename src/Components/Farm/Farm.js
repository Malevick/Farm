import React from 'react'
import Field from '../Field/'
import './Farm.css'

// Farm :: Props -> React.Component
export default ({
    addField,
    nbFields
}) =>
    <fieldset data-is="farm">
        <legend>The Farm</legend>
        { nbFields.map((field) => <Field key={field.id} id={field.id}/>) }
        {console.warn(nbFields)}
        { nbFields.length < 6 && 
            <button onClick={addField}>
                Add field
            </button>
        }
    </fieldset>
