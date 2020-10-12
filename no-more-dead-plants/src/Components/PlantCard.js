import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import {waterPlant} from '../State/Actions/waterPlant'
const StyledDiv = styled.div`
    border: 2px solid #ebebeb;
    border-radius: 5px;
    display: flex;
    
    margin: 2% 0;
    padding: 2%;
    width: 80%; 
    img {
        width: 100%;
        border-radius: 100%;
    }
    .image-container {
        width: 30%;
        padding: 2%;
    }
    .non-image-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 70%;
        text-align: left;
        padding: 2%;

        font-size: 1rem;
        line-height: 1.25;
        .plant-name {
            font-size: 2rem;
            padding-bottom: 2%;
        }
        .feedback {
            font-style: italic;
        }
        .user-information {
            padding-bottom: 2%;
        }
        button {
            border: 1px solid #ebebeb;
            background: white;
            border-radius: 5px;
            &:hover {
                background: #ebebeb;
            }
        }
    }
    

`

const mapStateToProps = state => {
    return {
        state: state
    }
}

const PlantCard = props => {
    const today = new Date()
    const {id, name} = props.details;
    const pictureUrl = props.details.picture_url;
    const goal = props.details.watering_goal_in_days;
    let lastWatered = null
    let daysSinceWatered = null
    if (props.details.watering_history != null) {
        lastWatered = new Date(props.details.watering_history);
        daysSinceWatered = Math.floor((today.getTime() - lastWatered.getTime()) / (1000 * 3600 * 24))
    } else {
        lastWatered = null
    }
    
    //we want to calculate the last watering date
    
    
   
    
    const WateringFeedback = props => {
        const {daysSinceWatered, goal} = props;
        if (daysSinceWatered === null) {
            return <p className = "feedback">Try watering it!</p>
        }
        else if (daysSinceWatered > goal) {
            const days = daysSinceWatered - goal
            return <p className = "feedback">You should have watered this plant {days} {days === 1? "day" : "days"} ago!</p>
        } else if (daysSinceWatered === goal) {
            return <p className = "feedback">You should check to see if your plant needs water</p>
        } else {
            const days = goal - daysSinceWatered
            return <p className = "feedback">You don't need to water this plant for {days} {days === 1 ? "day" : "days"}.</p>
        }
    }

    const wateringEvent = e => {
        e.preventDefault();
        const wateringDate = new Date();
        props.waterPlant(id, wateringDate)
    }
    return(
        <StyledDiv>
            
            <div className = "image-container">
                <img src = {pictureUrl}/>
            </div>
            <div className = "non-image-content">
                <div className = "user-information">
                    <p className = "plant-name">{name}</p>
                    
                    {lastWatered === null ? <p>You haven't watered this plant yet.</p> : <p>Last watered {daysSinceWatered} days ago.</p>}
                    <WateringFeedback daysSinceWatered = {daysSinceWatered} goal = {goal}/>
                </div>
                <div className = "user-input">
                    <button onClick = {wateringEvent}>I watered it!</button>
                </div>
                

            </div>
        </StyledDiv>
    )
}

export default connect(mapStateToProps, {waterPlant})(PlantCard)