import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        state: state
    }
}
const Home = props => {
    return(
        <>
            <h1>This is the home component</h1>
        </>
    )
}

export default connect(mapStateToProps, {})(Home)