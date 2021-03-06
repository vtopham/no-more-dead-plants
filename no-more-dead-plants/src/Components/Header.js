import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleAdding } from '../State/Actions/toggleAdding'
const HeaderContainer = styled.div`

    margin-bottom: 2%;
    padding-top: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 1;
    background: white;
    width: 100%;
    height: 130px;
    h1 {
        font-size: 3rem;
        margin: 2% 0;
        
    }

    .nav-links {
        display: flex;
        justify-content: center; 
        width: 100%;
        * {
            margin: 0 1%;
            padding: 1%;
            border-radius: 5px;
            &:hover {
                background: #ebebeb;
            }
        }
    }

    

`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const mapStateToProps = state => {
    return {
        state: state
    }
}
const Header = props => {

    const toggleAddModal = e => {
        // e.preventDefault();
        if (!props.state.adding) {
            props.toggleAdding()
        }
        
        
    }
    return (
        <HeaderContainer>
            <div className = "header-title">
                <h1>No More Dead Plants</h1>
            </div>
            <nav className = "nav-links">
                    <StyledLink to = {"/home"}>Home</StyledLink>
                    <StyledLink onClick = {toggleAddModal} to = {"/add"}>Add New Plant</StyledLink>
            </nav>
        </HeaderContainer>
    )
}

export default connect(mapStateToProps,{toggleAdding})(Header)