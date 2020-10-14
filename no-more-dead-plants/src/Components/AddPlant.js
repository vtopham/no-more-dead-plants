import React, {useState} from 'react'

import styled from 'styled-components'
import { toggleAdding } from '../State/Actions/toggleAdding'
import { connect } from 'react-redux'
import ModalContainer from './ModalContainer'
import StyledForm from './StyledForm'
//This will pop up when you want to add a plant

const mapStateToProps = state => {
    return {
        state: state
    }
}
const AddPlant = props => {
    
    const blankForm = {
        name: '',
        watering_history: null,
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
        
        props.addPlant({
            ...formState,
            id: props.state.next_id
        });
        props.toggleAdding();
        setFormState(blankForm);
        props.history.push("/home")

    }

    const cancelForm = e => {
        e.preventDefault();
        props.toggleAdding();
        setFormState(blankForm);
        props.history.push("/home")
    }
    return ( 
        <ModalContainer type = "add">
            <div className = "add-plant-container hide-adding">
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
                        <input className = "integer-value" value = {formState.watering_goal_in_days} onChange = {updateForm} name = "watering_goal_in_days"/>
                    </div>
                    <div className = "button-holder">
                        <button className = "add-button" onClick = {submitForm}>Add Plant</button>
                        <button className = "cancel-button" onClick = {cancelForm}>Cancel</button>
                    </div>
                </StyledForm>
                
            </div>
        </ModalContainer>
    )
}

export default connect(mapStateToProps,{toggleAdding})(AddPlant)