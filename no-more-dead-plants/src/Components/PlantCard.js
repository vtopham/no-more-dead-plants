import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    img {
        width: 20%;
    }

`
const PlantCard = props => {
    const today = new Date()
    const {id, name} = props.details;
    const pictureUrl = props.details.picture_url;
    const goal = props.details.watering_goal_in_days;
    const lastWatered = new Date(props.details.watering_history);
    //we want to calculate the last watering date
    
    console.log(lastWatered)
    const daysSinceWatered = Math.floor((today.getTime() - lastWatered.getTime()) / (1000 * 3600 * 24))
    console.log(daysSinceWatered )
    
    const WateringFeedback = props => {
        const {daysSinceWatered, goal} = props;
        if (daysSinceWatered > goal) {
            return <p>You should have watered this plant {daysSinceWatered - goal} days ago!</p>
        } else if (daysSinceWatered === goal) {
            return <p>You should check to see if your plant needs water</p>
        } else {
            return <p>You don't need to water this plant for {goal - daysSinceWatered} days.</p>
        }
    }

    return(
        <StyledDiv>
            <p>plant number {id}</p>
            <div className = "image-container">
                <img src = {pictureUrl}/>
            </div>
            <div className = "non-image-content">
                <p>{name}</p>
                <p>Last watered {daysSinceWatered} days ago.</p>
                <WateringFeedback daysSinceWatered = {daysSinceWatered} goal = {goal}/>
                

            </div>
        </StyledDiv>
    )
}

export default PlantCard