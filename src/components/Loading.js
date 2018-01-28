

import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const Loading = () => (
    <div style={styles.container}>
        <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
        </div>
        <div style={{marginTop: 20, fontFamily: 'Oxygen', color: '#fafafa'}}>Your data is coming right away!</div>
    </div>
)

const styles = {
    container : {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: "#6BE3CE"
    },
    heading: {
        marginBottom: 40
    }
}

export default Loading