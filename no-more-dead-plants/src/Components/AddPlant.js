import React, {useState} from 'react'

import styled from 'styled-components'
import { toggleAdding } from '../State/Actions/toggleAdding'
import { connect } from 'react-redux'

//This will pop up when you want to add a plant

const ModalContainer = styled.div`
    
    
    
    position: absolute;
    margin: 0 auto;
    background: white;
    z-index: 1;
    // margin-top: 3%;
    padding: 5%;
    border-radius: 5px;
    border: 2px solid #ebebeb;
    h3 {
        font-size: 1.4rem;
    }

    box-shadow: -7px 7px 10px rgba(0, 0, 0, 0.2);

`

const StyledForm = styled.form`
    
    .input-holder {
        margin: 4% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        * {
            margin: 1% 0;
        }
        
    }
    input {
        border: 1px solid #ebebeb;
        padding: 2%;
    }
    .button-holder {
        display: flex;
        justify-content: center;
        button {
            margin: 2% 3%;
            padding: 3% 5%;
            border-radius: 5px;
            border: none;
        }
        
    }
    
    .add-button {
        background: #a1ffc3;
    }
    .cancel-button {
        background: #ffb2a1;
    }

    .integer-value {
        width: 40px;
    }

`

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