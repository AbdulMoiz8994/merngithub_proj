import React, { Component, Fragment } from 'react';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


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

        const { name, company, avatar_url, blog, login, bio, location, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user
        const { loading } = this.props
        if (loading) {
            return <Spinner />
        }
        //internal Style
        const btnStyle = { border: '2px solid black', width: '15%', borderRadius: '5%' }
        const useStyle = {
            fontSize: '150%',
            marginBottom: '-0.8%'
        }
        //second div
        const userBio = {
            padding: '5%'
        }

        return (
            <Fragment>
                <Link to="/" className="btn btn-light" style={btnStyle}>Back To Home</Link>
               Hireable: {hireable ? <FaCheckCircle className="fas fa-check text-success" style={useStyle} /> : <FaTimesCircle className="fas fa-times-circle text-danger" style={useStyle} />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="Profile User" title={login} className="round-img" style={{ width: '40%' }} />
                        <h1>{name}</h1>
                        {location && (
                            <Fragment>
                                <h3>Location: {location}</h3>
                            </Fragment>
                        )}
                    </div>
                    <div style={userBio}>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                                <a href={html_url} rel="noreferrer" className="btn btn-dark my-1" target="_blank">Github User</a>
                                <ul>
                                    <li>
                                        {login && (
                                            <Fragment>
                                                Username: {login}
                                            </Fragment>
                                        )}
                                    </li>
                                    <li>
                                        {company && (
                                            <Fragment>
                                                Company Name: {company}
                                            </Fragment>
                                        )}
                                    </li>
                                    {/* basically it is a blog/we call website */}
                                    <li>
                                        {blog && (
                                            <Fragment>
                                                Webiste: {blog}
                                            </Fragment>
                                        )}
                                    </li>
                                </ul>
                            </Fragment>
                        )}

                    </div>

                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repo: {public_repos}</div>
                    <div className="badge badge-dark">public Gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}

export default User
