import React, { Component } from 'react'

export class Alert extends Component {
    render() {
        const { alert } = this.props
        return (
            alert !== null && (
                <div className={`alert alert-${alert.type}`}>
                    <i className="fas fa-info-circle"></i> {alert.msg}
                    <i className="fas fa-trash-alt" onClick={this.props.removeTrash}
                        style={{ paddingLeft: '45%', cursor: 'pointer', backgroundColor: 'rgba(255,255,224,0.5)' }}>

                    </i>
                </div>
            )
        )
    }
}

export default Alert
