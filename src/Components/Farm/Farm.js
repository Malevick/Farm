import React from 'react'
import Field from '../Field/'
import './Farm.css'

// Farm :: Props -> React.Component
export default ({
    addField,
    nbFields,
    gold
}) =>
    <fieldset data-is="farm">
        <legend>The Farm</legend>
        <p>money : {gold}</p>
        { nbFields.map((field) => <Field key={field.id} id={field.id}/>) }
        { nbFields.length < 6 && 
            <button onClick={addField}>
                Add field
            </button>
        }
    </fieldset>
