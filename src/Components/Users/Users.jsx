import React, { Component } from 'react';
import GitHubUser from './GitHubUser';
import Spinner from '../Spinner/Spinner'

//Type Checking
import PropTypes from 'prop-types';


export class Users extends Component {
    PropTypes = {
        users: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    render() {
        const useStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '0.5rem'
        }

        if (this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div style={useStyle}>
                    {this.props.users.map((user) => {
                        return (
                            <GitHubUser key={user.id} users={user} />
                        )
                    })}

                </div>
            )
        }
    }
}

export default Users
