import Field from './Field'
import { connect } from 'react-redux'
import { plantSeeds, SEEDS_TYPES } from './../../Redux/State/Farm'

// mapStateToProps :: State -> Props
const mapStateToProps = (state, ownProps) => ({
    seedTypes : SEEDS_TYPES,
    plantedSeeds: state.Farm.fields.find(
        field => field.id === ownProps.id
    ).seedType,
})

// mapDispatchToProps :: (Dispatch, Props) -> Props
const mapDispatchToProps = (dispatch, ownProps) => ({
    plantSeeds: event => {
        event.preventDefault();
        dispatch(plantSeeds(ownProps.id, event.target.seeds.value))
    },
})

// Field :: Props -> React.Component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Field)
