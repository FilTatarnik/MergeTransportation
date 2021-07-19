import React, { Component } from 'react'
import './styles.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                    <div className='mergeLogo'>
                        <h1>MT</h1>
                    </div>
                    <div className='navSection'>
                        <ul className='navItems'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Clients</li>
                            <li>Contact</li>
                        </ul>
                    </div>
            </div>
        )
    }
}
