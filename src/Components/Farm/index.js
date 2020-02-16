import Farm from './Farm'
import { connect } from 'react-redux'
import { addField } from './../../Redux/State/Farm'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
    nbFields: state.Farm.fields,
    gold: state.Farm.gold
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
