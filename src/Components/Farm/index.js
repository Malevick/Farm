import Farm from './Farm'
import { connect } from 'react-redux'
import { addField } from './../../Redux/State/Farm'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
    fieldBuyPrice : state.Farm.fieldBuyPrice,
    fields: state.Farm.fields,
    gold: state.Farm.gold,
    maxFields : state.Farm.maxFields,
})

// mapDispatchToProps :: Dispatch -> Props
const mapDispatchToProps = dispatch => ({
    addField: () => dispatch(addField()),
})

// Farm :: Props -> React.Component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Farm)
