import React, { Component } from 'react'

export class Alert extends Component {
    render() {
        const { alert } = this.props
        return (
            alert !== null && (
                <div className={`alert alert-${alert.type}`}>
                    <i className="fas fa-info-circle"></i> {alert.msg}
                    <i className="fas fa-trash-alt" onClick={this.props.removeTrash}
                        style={{ paddingLeft: '45rem', cursor: 'pointer' }}>

                    </i>
                </div>
            )
        )
    }
}

export default Alert
