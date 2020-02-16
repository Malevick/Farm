import React from 'react'
import Field from '../Field/'

// Farm :: Props -> React.Component
export default ({
    addField
}) =>
    <div data-is="farm">
        <Field/>
        <button onClick={addField}>
            Add field
        </button>
    </div>
