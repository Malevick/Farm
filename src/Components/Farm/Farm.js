import React from 'react'
import Field from '../Field/'

export default ({
    addField,
    nbFields
}) =>
    <div data-is="farm">
        <Field/>
        {nbFields < 5 && 
            <button onClick={addField}>
                Add field
            </button>
        }
    </div>