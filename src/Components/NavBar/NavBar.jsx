import React, { Component } from 'react'
import styles from './NavBar.module.css'
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
        return (
            <div className={styles.header} data-aos="fade-down">
                <h1>
                    {this.props.title} <i className="fab fa-github-square"></i>
                </h1>
            </div>
        )
    }
}

export default NavBar
