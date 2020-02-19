import Field from './Field'
import { connect } from 'react-redux'
import { plantSeeds, harvest, water } from './../../Redux/State/Farm'
import { SEED_TYPES } from './../../Redux/State/Marketplace'
import Marketplace from './../../Redux/State/Marketplace'
/**
 * @typedef {import('../../Redux/State/Marketplace').Seed} Seed
 * @typedef {import('../../Redux/State/Farm').Farm} Farm
 * @typedef {import('../../Redux/State/Marketplace').Marketplace} Marketplace
 * @typedef {import('../../Redux/State/Farm').Field} Field
 */

/**
 * -- Find a seed from a seedType tab
 * @param {string} seedName 
 * @param {[Seed]} seedTypes 
 * @returns {Seed}
 */
const findSeed = (seedName, seedTypes)=>
    seedTypes.find(seed => seed.name === seedName)

/**
 * mapStateToProps :: State -> Props
 * @param {Object} state 
 * @param {Farm} state.Farm
 * @param {Marketplace} state.Marketplace
 * @param {Props} ownProps
 * @returns {{
        * seedTypes : Seed
        * field : Field
 * }}
 */
const mapStateToProps = (state, ownProps) => ({
    seedTypes : state.Marketplace.seedTypes,
    field: state.Farm.fields.find(field => field.id === ownProps.id),
})

/**
 * mapDispatchToProps :: (Dispatch, Props) -> Props
 * @param {Dispatch} dispatch 
 * @param {Props} ownProps 
 * @returns {{
    * plantSeeds : plantSeeds,
    * harvest : harvest, 
    * water : water
 * }}
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    plantSeeds: event => {
        event.preventDefault();
        dispatch(
            plantSeeds(
                ownProps.id, 
                findSeed(event.target.seeds.value, SEED_TYPES)))
    },
    harvest: () => dispatch(harvest(ownProps.id)),
    water: () => dispatch(water(ownProps.id))
})

// Field :: Props -> React.Component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Field)
