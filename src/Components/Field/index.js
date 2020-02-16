import Field from './Field'
import { connect } from 'react-redux'
import { plantSeeds, SEEDS_TYPES } from './../../Redux/State/Farm'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
    seedTypes : SEEDS_TYPES,
})

// mapDispatchToProps :: Dispatch -> Props
const mapDispatchToProps = dispatch => ({
    plantSeeds: event => {
        event.preventDefault();
        dispatch(plantSeeds(event.target.seeds.value))
    },
})

// Field :: Props -> React.Component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Field)
