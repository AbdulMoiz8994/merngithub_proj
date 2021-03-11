import React, { Component, Fragment } from 'react';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    static propTypes = {
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    }
    render() {

        const { name, company, avatar_url, blog, login, bio, location, html_url, followers, following } = this.props.user
        const { loading } = this.props
        if (loading) {
            return <Spinner />
        }
        //internal Style
        const btnStyle = { border: '2px solid black', width: '15%', borderRadius: '5%' }

        return (
            <Fragment>
                <Link to="/" className="btn btn-light" style={btnStyle}>Back To Home</Link>
            </Fragment>
        )
    }
}

export default User
