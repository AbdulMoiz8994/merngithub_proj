import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export class About extends Component {
    componentDidMount() {
        Aos.init({ duration: 1000 })
    }
    render() {
        return (
            <div>
                <h1>We are on About Page</h1>
            </div>
        )
    }
}

export default About
