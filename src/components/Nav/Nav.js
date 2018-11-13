import React from 'react'
import {  Link } from 'react-router-dom';
import './nav.css'
const nav = [
    {
        link: 'About',
        route: '/'
    },
    {
        link: 'Portfolio',
        route: '/portfolio'
    },
    {
        link: 'Contact',
        route: '/contact'
    }
]

const Nav = () => {
    return ( <div>
        
        {nav.map((nav, i) => {
            return <Link to={nav.route} key={i}>
            <div className='links'>{nav.link}</div>
            </Link>
        })}
        
        </div> );
}
 
export default Nav;