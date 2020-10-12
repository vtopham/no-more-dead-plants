import React, {useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PlantCard from '../Components/PlantCard'
import { addPlant } from '../State/Actions/addPlant'
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
const ModalContainer = styled.div`
    display: flex;
    // margin: 0 auto;
    position: absolute;
    margin: 0 auto;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50, -50);
    background: white;
    

`

const StyledForm = styled.form`


`


const Home = props => {
    //This will pop up when you want to add a plant
    const AddPlant = props => {
        console.log(props)
        const blankForm = {
            name: '',
            watering_history: '',
            picture_url: '',
            location: '',
            watering_goal_in_days: ''
        }
        const [formState, setFormState] = useState(blankForm)
    
        const updateForm = e => {
            e.preventDefault();
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            })
        }

        const submitForm = e => {
            e.preventDefault();
            setFormState({
                ...formState,
                id: props.state.next_id
            });
            props.addPlant(formState);
            setFormState(blankForm);
        }

        const cancelForm = e => {
            e.preventDefault();
            setFormState(blankForm)
        }
        return ( 
            <ModalContainer>
                <div className = "add-plant-container">
                    <div>
                        <h3>Add A Plant</h3>
                    </div>
                    <StyledForm className = "new-plant-form">
                        <div className = "name input-holder" >
                            <label name = "name ">Plant Name: </label>
                            <input value = {formState.name} onChange = {updateForm} name = "name"/>
                        </div>
                        <div className = "picture_url input-holder">
                            <label name = "picture_url ">URL of plant picture: </label>
                            <input value = {formState.picture_url} onChange = {updateForm} name = "picture_url"/>
                        </div>
                        
                        <div className = "location input-holder">
                            <label name = "location ">Plant location: </label>
                            <input value = {formState.location} onChange = {updateForm} name = "location"/>
                        </div>
                        <div className = "watering_goal_in_days input-holder">
                            <label name = "watering_goal_in_days ">How many days between waterings?: </label>
                            <input value = {formState.watering_goal_in_days} onChange = {updateForm} name = "watering_goal_in_days"/>
                        </div>
                        <div className = "button-holder">
                            <button onClick = {submitForm}>Add Plant</button>
                            <button onClick = {cancelForm}>Cancel</button>
                        </div>
                    </StyledForm>
                    
                </div>
            </ModalContainer>
        )
    }
    
    //this is an array of all the plants belonging to a user
    const plants = props.state.plants
    return(
        <HomeContainer>
            <h2>Let's see how your plants are doing!</h2>
            {/* We'll get a nice modal going for if you want to add a new plant */}
            <AddPlant state = {props.state} addPlant = {props.addPlant}/>
            {/* //We'll display a card for each of these plants with their information */}
            {plants.map(plant => {
                return <PlantCard className = "plantCard" details = {plant} key = {plant.id}/>
            })}
        </HomeContainer>
    )
}

export default connect(mapStateToProps, {addPlant})(Home)