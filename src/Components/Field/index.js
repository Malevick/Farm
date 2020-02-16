import Field from './Field'
import { connect } from 'react-redux'
import { plantSeeds, SEEDS_TYPES, harvest } from './../../Redux/State/Farm'

//findSeed :: (String, [SeedType]) -> SeedType
const findSeed = (seedName, seedTypes)=>
    seedTypes.find(seed => seed.name === seedName)


// mapStateToProps :: State -> Props
const mapStateToProps = (state, ownProps) => ({
    seedTypes : SEEDS_TYPES,
    field: state.Farm.fields.find(
        field => field.id === ownProps.id
    ),
})

// mapDispatchToProps :: (Dispatch, Props) -> Props
const mapDispatchToProps = (dispatch, ownProps) => ({
    plantSeeds: event => {
        event.preventDefault();
        dispatch(
            plantSeeds(
                ownProps.id, 
                findSeed(event.target.seeds.value, SEEDS_TYPES)
                )
            )
    },
    harvest: () => dispatch(harvest(ownProps.id))
})

// Field :: Props -> React.Component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Field)
