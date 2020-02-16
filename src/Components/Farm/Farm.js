import React from 'react'
import Field from '../Field/'

// Farm :: Props -> React.Component
export default ({
    addField,
    nbFields
}) =>
    <div data-is="farm">
        <Field/>
        {nbFields < 6 && 
            <button onClick={addField}>
                Add field
            </button>
        }
    </div>
