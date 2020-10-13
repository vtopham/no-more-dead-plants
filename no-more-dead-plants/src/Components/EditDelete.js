import React from 'react'
import styled from 'styled-components'


const StyledEditDelete = styled.div`
    position: fixed;
    width: 100%;
    max-width: 100%;
    .icon-button {
        height: 30px;
        width: 30px;
        
        margin: 0 2%;

    }
   .icons-container {
       display: flex;
       width: 100%;
       justify-content: flex-end;
       background: red;
       
   }
   i {
       font-size: 1rem;
   }
    
    

`
const EditDelete = props => {
    return (
        <StyledEditDelete>
            <div className = "icons-container">
                <button className = "edit-button icon-button">
                    <i className = "material-icons">create</i>
                </button>
                <button className = "delete-button icon-button">
                    <i className = "material-icons">delete</i>
                </button>
            </div>
        </StyledEditDelete>
    )

}



export default EditDelete;