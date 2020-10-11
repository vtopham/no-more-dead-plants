import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PlantCard from '../Components/PlantCard'

const mapStateToProps = state => {
    return {
        state: state
    }
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = props => {
    //this is an array of all the plants belonging to a user
    const plants = props.state.plants
    return(
        <HomeContainer>
            <h2>Let's see how your plants are doing!</h2>
            {/* //We'll display a card for each of these plants with their information */}
            {plants.map(plant => {
                return <PlantCard className = "plantCard" details = {plant} key = {plant.id}/>
            })}
        </HomeContainer>
    )
}

export default connect(mapStateToProps, {})(Home)