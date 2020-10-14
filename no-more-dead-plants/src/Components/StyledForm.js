import styled from 'styled-components'
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


export default StyledForm;