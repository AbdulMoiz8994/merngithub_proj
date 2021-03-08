import React, { Component, Fragment } from 'react'
import spinner from './nobgspinner.gif'


export class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <img src={spinner} alt="spinner" style={{ width: '500px', height: '500px', margin: 'auto', marginLeft: '250px', display: 'block' }} />
            </Fragment>
        )
    }
}

export default Spinner
