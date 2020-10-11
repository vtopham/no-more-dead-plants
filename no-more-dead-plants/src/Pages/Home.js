import React from 'react'

import { connect } from 'react-redux'

import PlantCard from '../Components/PlantCard'

const mapStateToProps = state => {
    return {
        state: state
    }
}

const Home = props => {
    //this is an array of all the plants belonging to a user
    const plants = props.state.plants
    return(
        <>
            <h2>Let's see how your plants are doing!</h2>
            {/* //We'll display a card for each of these plants with their information */}
            {plants.map(plant => {
                return <PlantCard details = {plant} key = {plant.id}/>
            })}
        </>
    )
}

export default connect(mapStateToProps, {})(Home)