import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReposItem from './ReposItem'
export class Repos extends Component {
    static propTypes = {
        repos: PropTypes.array.isRequired,
    }

    render() {
        const { repos } = this.props
        // console.log(repos)
        return (
            <div>
                {repos.map((userRepo) => <ReposItem userRepo={userRepo} key={userRepo.id} />)}
            </div>
        )
    }
}

export default Repos

