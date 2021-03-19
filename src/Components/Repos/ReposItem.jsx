import React, { Component } from 'react'
import PropTypes from 'prop-types'



export class ReposItem extends Component {
    static propTypes = {
        userRepo: PropTypes.object.isRequired,
    }

    render() {
        const { userRepo } = this.props
        return (
            <div className="card">
                <a href={userRepo.html_url} target="_blank" rel="noreferrer">{userRepo.name}</a>
            </div>
        )
    }
}

export default ReposItem
