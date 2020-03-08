import Farm from './Farm'
import { connect } from 'react-redux'
import { addField } from './../../Redux/State/Farm'

/**
 * @typedef {import('../../Redux/State/Farm').Field} Field
 * @typedef {import('../../Redux/State/Farm').Farm} Farm
 * @typedef {import('../../Redux/State/Farm').addField} addField
 */

/**
 * mapStateToProps :: State -> Props
 * @param {Object} state 
 * @param {Farm} state.Farm
 * @returns {{
 *      fieldBuyPrice : Number, 
 *      fields : [Field],
 *      gold : Number,
 *      maxFields : Number
 * }}
 */
const mapStateToProps = state => ({
    fieldBuyPrice : state.Farm.fieldBuyPrice,
    fields: state.Farm.fields,
    gold: state.Farm.gold,
    maxFields : state.Farm.maxFields,
})

/**
 * mapDispatchToProps :: Dispatch -> Props
 * @param {Dispatch} dispatch 
 * @returns {addField}
 */
const mapDispatchToProps = dispatch => ({
    addField: () => dispatch(addField()),
})

// Farm :: Props -> React.Component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Farm)
