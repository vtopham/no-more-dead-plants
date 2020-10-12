import React, {useState} from 'react'
import styled from 'styled-components'
import { toggleAdding } from '../State/Actions/toggleAdding'
import { connect } from 'react-redux'

//This will pop up when you want to add a plant

const ModalContainer = styled.div`
    
    
    
    position: absolute;
    margin: 0 auto;
    background: white;
    

`

const StyledForm = styled.form`


`

const mapStateToProps = state => {
    return {
        state: state
    }
}
const AddPlant = props => {
    console.log(props)
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
        setFormState({
            ...formState,
            id: props.state.next_id
        });
        props.addPlant(formState);
        props.toggleAdding();
        setFormState(blankForm);

    }

    const cancelForm = e => {
        e.preventDefault();
        props.toggleAdding();
        setFormState(blankForm);
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

export default connect(mapStateToProps,{toggleAdding})(AddPlant)