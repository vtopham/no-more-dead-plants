import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const HeaderContainer = styled.div`

    margin: 4% 0 2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;

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
const Header = () => {
    return (
        <HeaderContainer>
            <div className = "header-title">
                <h1>No More Dead Plants</h1>
            </div>
            <nav className = "nav-links">
                    <StyledLink to = {"/home"}>Home</StyledLink>
                    <StyledLink to = {"/add"}>Add New Plant</StyledLink>
            </nav>
        </HeaderContainer>
    )
}

export default Header