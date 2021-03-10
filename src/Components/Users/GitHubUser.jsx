import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

export class GitHubUser extends Component {
    componentDidMount() {
        Aos.init({ duration: 2000 })
    }
    render() {
        const { login, avatar_url, html_url } = this.props.users
        return (
            <div className="card text-center" data-aos="fade">
                <img src={avatar_url} alt="User" title={login} className="round-img" />
                <h1 className="userName">{login}</h1>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">GitHub Details</Link>
            </div>
        )
    }
}


export default GitHubUser
