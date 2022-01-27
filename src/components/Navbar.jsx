import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function navbar({title}) {
    return (
        <nav className = 'navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>Navbar</div>    
        <div className = 'flex-none px-2 mx2'>
            <FaGithub className = 'inline pr-2 text-3xl' ></FaGithub>
            <Link to = '/' className = 'text-lg font-bold align-middle'>
            </Link>
        </div>
        <div className = 'flex-1 px-2 mx2'>
            <div className= 'flex justify-end'>
                <Link to = '/' className='btn btn-ghost btn-sm rounded-btn'>
                    Home
                </Link>
            </div>
        </div>
        </nav>
    )
}
navbar.defaultProps = {
    title : 'GitHub finder',
}

navbar.propTypes = {
    title : PropTypes.string
}

export default navbar
