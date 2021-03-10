import React, { Component } from 'react'
import styles from './NavBar.module.css'
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


export class NavBar extends Component {
    componentDidMount() {
        Aos.init({ duration: 1000 })
    }
    static defaultProps = {
        title: "GitHub Users",
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        const useStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottom: '3px solid gray',
            width: '50vh',
            marginLeft: '38%',
            marginBottom: '2%'
        }
        return (
            <div className={styles.header} data-aos="fade-down">
                <h1>
                    {this.props.title} <i className="fab fa-github-square"></i>
                </h1>
                <ul style={useStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
